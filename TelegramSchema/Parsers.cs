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
            
            var ops = new HashSet<string>();

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
                    WriteParserConstructorLambda(writer, types, constructor, ops);
                }
                else
                {
                    WriteParserConstructor(writer, types, constructor, ops);
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
            writer.WriteLine();
            if (ops.Contains("u")) writer.WriteLine("const u = undefined;");
            if (ops.Contains("i32")) writer.WriteLine("function i32() { return s.readInt32(); }");
            if (ops.Contains("i64")) writer.WriteLine("function i64() { return s.readInt64(); }");
            if (ops.Contains("i128")) writer.WriteLine("function i128() { return s.readInt128(); }");
            if (ops.Contains("i256")) writer.WriteLine("function i256() { return s.readInt256(); }");
            if (ops.Contains("f64")) writer.WriteLine("function f64() { return s.readDouble(); }");
            if (ops.Contains("str")) writer.WriteLine("function str() { return s.readString(); }");
            if (ops.Contains("bytes")) writer.WriteLine("function bytes() { return s.readBytes(); }");
            writer.WriteLine();
            if (ops.Contains("vector"))
            {
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
            }

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

        private static void WriteParserConstructorLambda(
            IndentedTextWriter writer,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Constructor constructor,
            ISet<string> ops)
        {
            writer.Write($"const _{FixEntityName(constructor)}: any = () => ({{");
            writer.Write($"_: '{constructor.predicate}'");
            foreach (var param in constructor.@params)
            {
                writer.Write($", {param.name}: {FormatAccessor(types, param.type, ops)}");
            }
            writer.WriteLine("});");
        }

        private static void WriteParserConstructor(
            IndentedTextWriter writer,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Constructor constructor,
            ISet<string> ops)
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
                    writer.WriteLine($"{param.name}: {FormatAccessor(types, param.type, ops)},");
                }
            }
            writer.Indent--;
            writer.WriteLine("}");
            writer.Indent--;
            writer.WriteLine("}");
        }
        
        private static string FormatAccessor(IReadOnlyDictionary<string, HashSet<Constructor>> types, string paramType, ISet<string> ops)
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
                case "true": return bit >= 0 ? ("!!(flags & 0x" + Convert.ToString(1 << bit, 16) + ")") : FormatAccessorMandatory(types, paramType, ops); 
                default:
                    if (bit >= 0) ops.Add("u");
                    return bit >= 0 
                    ? ("flags & 0x" + Convert.ToString(1 << bit, 16) + " ? " + FormatAccessorMandatory(types, paramType, ops) + " : u")
                    : FormatAccessorMandatory(types, paramType, ops); 
            }
        }
        
        private static string FormatAccessorMandatory(IReadOnlyDictionary<string, HashSet<Constructor>> types, string paramType, ISet<string> ops, bool addBraces = true)
        {
            if (IsVector(paramType))
            {
                ops.Add("vector");
                var (param, bare) = UnwrapVector(paramType);
                
                if (param.StartsWith("%"))
                {
                    param = types[param.Substring(1)].First().predicate;
                }

                return $"vector({FormatAccessorMandatory(types, param, ops, false)}{(bare ? ", true" : "")})";
            }

            var braces = addBraces ? "()" : "";
            var b = paramType switch
            {
                "int" => "i32",
                "long" => "i64",
                "int128" => "i128",
                "int256" => "i256",
                "double" => "f64",
                "string" => "str",
                "bytes" => "bytes",
                _ => $"{(IsType(types, paramType) ? "obj" : $"_{FixEntityName(paramType)}")}"
            };
            ops.Add(b);
            return $"{b}{braces}";
        }
    }
}