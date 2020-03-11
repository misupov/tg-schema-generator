using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using static TelegramSchema.Utils;

namespace TelegramSchema
{
    static class Parsers
    {
        public static void WriteParsers(
            string outputFolder,
            string schemaName,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Schema schema)
        {
            using var fileStream = File.Open(Path.Combine(outputFolder, $"{schemaName}.parser.ts"), FileMode.Create);
            using var streamWriter = new StreamWriter(fileStream);
            using var writer = new IndentedTextWriter(streamWriter, "  ") {NewLine = "\n"};
            
            writer.WriteLine("/*******************************************************************************************/");
            writer.WriteLine("/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */");
            writer.WriteLine("/*                                                                                         */");
            writer.WriteLine("/* Do not make changes to this file unless you know what you are doing -- modify           */");
            writer.WriteLine("/* the tool instead.                                                                       */");
            writer.WriteLine("/*                                                                                         */");
            writer.WriteLine("/* Source: " + $"{schemaName}.json".PadRight(80, ' ') + "*/");
            writer.WriteLine("/*                                                                                         */");
            writer.WriteLine("/*******************************************************************************************/");
            writer.WriteLine();
            writer.WriteLine("interface ByteStream {");
            writer.Indent++;
            writer.WriteLine("readInt32(): number;");
            writer.WriteLine("readInt64(): string;");
            writer.WriteLine("readInt128(): string;");
            writer.WriteLine("readInt256(): string;");
            writer.WriteLine("readDouble(): number;");
            writer.WriteLine("readString(): string;");
            writer.WriteLine("readBytes(): ArrayBuffer;");
            writer.WriteLine("revert(bytes: number): void;");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("let s: ByteStream;");
            writer.WriteLine("let fallbackParse: ((stream: ByteStream) => any) | undefined;");
            writer.WriteLine();
            writer.WriteLine("export default function parse(stream: ByteStream, fallback?: (stream: ByteStream) => any) {");
            writer.Indent++;
            writer.WriteLine("s = stream;");
            writer.WriteLine("fallbackParse = fallback;");
            writer.WriteLine("return obj();");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("const u = undefined;");
            writer.WriteLine("function i32() { return s.readInt32(); }");
            writer.WriteLine("function i64() { return s.readInt64(); }");
            writer.WriteLine("function i128() { return s.readInt128(); }");
            writer.WriteLine("function i256() { return s.readInt256(); }");
            writer.WriteLine("function f64() { return s.readDouble(); }");
            writer.WriteLine("function str() { return s.readString(); }");
            writer.WriteLine("function bytes() { return s.readBytes(); }");
            writer.WriteLine();
            writer.WriteLine("function vector(t: () => any, bare = false) {");
            writer.Indent++;
            writer.WriteLine("if (!bare) { i32(); /* ignoring constructor id. */ }");
            writer.WriteLine("const len = i32();");
            writer.WriteLine("const result = [];");
            writer.WriteLine("for (let i = 0; i < len; ++i) result.push(t());");
            writer.WriteLine("return result;");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            
            foreach (var constructor in schema.constructors)
            {
                if (constructor.predicate == "boolTrue")
                {
                    writer.WriteLine($"function _{FixEntityName(constructor)}() {{ return true; }}");
                } 
                else if (constructor.predicate == "boolFalse")
                {
                    writer.WriteLine($"function _{FixEntityName(constructor)}() {{ return false; }}");
                } 
                else if (!HasFlags(constructor))
                {
                    WriteParserConstructorLambda(writer, types, constructor);
                }
                else
                {
                    WriteParserConstructor(writer, types, constructor);
                }
            }
            writer.WriteLine("");
            writer.WriteLine("const parserMap = new Map<number, () => any>([");
            writer.Indent++;
            foreach (var constructor in schema.constructors)
            {
                var constructorId = int.Parse(constructor.id);
                writer.WriteLine($"[0x{constructorId:x}, _{FixEntityName(constructor)}],");
            }
            writer.Indent--;
            writer.WriteLine("]);");
            writer.WriteLine("");
            writer.WriteLine("function obj() {");
            writer.Indent++;
            writer.WriteLine("const c = i32() >>> 0;");
            writer.WriteLine("const f = parserMap.get(c);");
            writer.WriteLine("if (f) {");
            writer.Indent++;
            writer.WriteLine("return f();");
            writer.Indent--;
            writer.WriteLine("} else if (fallbackParse) {");
            writer.Indent++;
            writer.WriteLine("s.revert(4);");
            writer.WriteLine("return fallbackParse(s);");
            writer.Indent--;
            writer.WriteLine("} else {");
            writer.Indent++;
            writer.WriteLine("console.error(`Unknown constructor 0x${c.toString(16)}.`);");
            writer.WriteLine("return undefined;");
            writer.Indent--;
            writer.WriteLine("}");
            writer.Indent--;
            writer.WriteLine("}");
        }

        private static void WriteParserConstructorLambda(IndentedTextWriter writer, IReadOnlyDictionary<string, HashSet<Constructor>> types, Constructor constructor)
        {
            writer.Write($"const _{FixEntityName(constructor)}: any = () => ({{");
            writer.Write($"_: '{constructor.predicate}'");
            foreach (var param in constructor.@params)
            {
                writer.Write($", {param.name}: {FormatAccessor(types, param.type)}");
            }
            writer.WriteLine("});");
        }

        private static void WriteParserConstructor(IndentedTextWriter writer, IReadOnlyDictionary<string, HashSet<Constructor>> types, Constructor constructor)
        {
            writer.WriteLine($"function _{FixEntityName(constructor)}(): any {{");
            writer.Indent++;
            if (HasFlags(constructor))
            {
                writer.WriteLine("const flags = i32();");
            }

            writer.WriteLine("return {");
            writer.Indent++;
            writer.WriteLine("_: '" + constructor.predicate + "',");
            foreach (var param in constructor.@params)
            {
                if (param.type != "#")
                {
                    writer.WriteLine($"{param.name}: {FormatAccessor(types, param.type)},");
                }
            }
            writer.Indent--;
            writer.WriteLine("}");
            writer.Indent--;
            writer.WriteLine("}");
        }
        
        private static string FormatAccessor(IReadOnlyDictionary<string, HashSet<Constructor>> types, string paramType)
        {
            var flagsMatch = Regex.Match(paramType, @"flags\.(.+)\?(.*)");
            var bit = -1;
            if (flagsMatch.Success)
            {
                bit = int.Parse(flagsMatch.Groups[1].Value);
                paramType = flagsMatch.Groups[2].Value;
            }
            switch (paramType)
            {
                case "true": return bit >= 0 ? ("!!(flags & 0x" + Convert.ToString(1 << bit, 16) + ")") : FormatAccessorMandatory(types, paramType); 
                default: return bit >= 0 
                    ? ("flags & 0x" + Convert.ToString(1 << bit, 16) + " ? " + FormatAccessorMandatory(types, paramType) + " : u")
                    : FormatAccessorMandatory(types, paramType); 
            }
        }
        
        private static string FormatAccessorMandatory(IReadOnlyDictionary<string, HashSet<Constructor>> types, string paramType)
        {
            if (IsVector(paramType))
            {
                var param = UnwrapVector(paramType);
                
                if (IsType(types, param))
                {
                    return "vector(obj)";
                }

                if (param.StartsWith("%"))
                {
                    param = types[param.Substring(1)].First().predicate;
                    return $"vector(_{FixEntityName(param)}, true)";
                }
                
                switch (param)
                {
                    case "int": return "vector(i32)";
                    case "long": return "vector(i64)";
                    case "int128": return "vector(i128)";
                    case "int256": return "vector(i256)";
                    case "double": return "vector(f64)";
                    case "string": return "vector(str)";
                    case "bytes": return "vector(bytes)";
                }
                return $"vector(_{FixEntityName(param)})";
            }

            switch (paramType)
            {
                case "int": return "i32()";
                case "long": return "i64()";
                case "int128": return "i128()";
                case "int256": return "i256()";
                case "double": return "f64()";
                case "string": return "str()";
                case "bytes": return "bytes()";
                case "vector": return "vector()";
                default: return "obj()"; 
            }
        }
    }
}