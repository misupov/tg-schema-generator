using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using static TelegramSchema.Utils;
using static TelegramSchema.Indentation;

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

            GeneratedFileNotice.Write(writer, schemaName);
            writer.WriteLine("interface ByteStream {");
            using (Indent(writer))
            {
                writer.WriteLine("readInt32(): number;");
                writer.WriteLine("readInt64(): string;");
                writer.WriteLine("readInt128(): string;");
                writer.WriteLine("readInt256(): string;");
                writer.WriteLine("readDouble(): number;");
                writer.WriteLine("readString(): string;");
                writer.WriteLine("readBytes(): ArrayBuffer;");
                writer.WriteLine("revert(bytes: number): void;");
            }
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("let s: ByteStream;");
            writer.WriteLine("let fallbackParse: ((stream: ByteStream) => any) | undefined;");
            writer.WriteLine();
            writer.WriteLine("export default function parse(stream: ByteStream, fallback?: (stream: ByteStream) => any) {");
            using (Indent(writer))
            {
                writer.WriteLine("s = stream;");
                writer.WriteLine("fallbackParse = fallback;");
                writer.WriteLine("return obj();");
            }
            writer.WriteLine("}");
            writer.WriteLine();
            foreach (var constructor in schema.constructors)
            {
                switch (constructor.predicate)
                {
                    case "boolTrue":
                    case "true":
                        writer.WriteLine($"const _{FixEntityName(constructor)} = () => true;");
                        break;
                    case "boolFalse":
                        writer.WriteLine($"const _{FixEntityName(constructor)} = () => false;");
                        break;
                    case "null":
                        writer.WriteLine($"const _{FixEntityName(constructor)} = () => null;");
                        break;
                    default:
                        if (!HasFlags(constructor))
                        {
                            WriteParserConstructorLambda(writer, types, constructor, ops);
                        }
                        else
                        {
                            WriteParserConstructor(writer, types, constructor, ops);
                        }

                        break;
                }
            }
            writer.WriteLine("");
            writer.WriteLine("const parserMap = new Map<number, () => any>([");
            using (Indent(writer))
            {
                foreach (var constructor in schema.constructors)
                {
                    var constructorId = int.Parse(constructor.id);
                    writer.WriteLine($"[0x{constructorId:x}, _{FixEntityName(constructor)}],");
                }
            }
            writer.WriteLine("]);");
            writer.WriteLine();
            if (ops.Contains("u")) writer.WriteLine("const u = undefined;");
            if (ops.Contains("i32")) writer.WriteLine("const i32 = () => s.readInt32();");
            if (ops.Contains("i64")) writer.WriteLine("const i64 = () => s.readInt64();");
            if (ops.Contains("i128")) writer.WriteLine("const i128 = () => s.readInt128();");
            if (ops.Contains("i256")) writer.WriteLine("const i256 = () => s.readInt256();");
            if (ops.Contains("f64")) writer.WriteLine("const f64 = () => s.readDouble();");
            if (ops.Contains("str")) writer.WriteLine("const str = () => s.readString();");
            if (ops.Contains("bytes")) writer.WriteLine("const bytes = () => s.readBytes();");
            writer.WriteLine();
            if (ops.Contains("vector"))
            {
                writer.WriteLine("function vector(t: () => any, bare = false) {");
                using (Indent(writer))
                {
                    writer.WriteLine("if (!bare) { i32(); /* ignoring constructor id. */ }");
                    writer.WriteLine("const len = i32();");
                    writer.WriteLine("const result = [];");
                    writer.WriteLine("for (let i = 0; i < len; ++i) result.push(t());");
                    writer.WriteLine("return result;");
                }
                writer.WriteLine("}");
                writer.WriteLine();
            }

            writer.WriteLine("function obj() {");
            using (Indent(writer))
            {
                writer.WriteLine("const c = i32() >>> 0;");
                writer.WriteLine("const f = parserMap.get(c);");
                writer.WriteLine("if (f) {");
                using (Indent(writer))
                    writer.WriteLine("return f();");
                writer.WriteLine("} else if (fallbackParse) {");
                using (Indent(writer))
                {
                    writer.WriteLine("s.revert(4);");
                    writer.WriteLine("return fallbackParse(s);");
                }

                writer.WriteLine("} else {");
                using (Indent(writer))
                {
                    writer.WriteLine("console.error(`Unknown constructor 0x${c.toString(16)}.`);");
                    writer.WriteLine("return undefined;");
                }

                writer.WriteLine("}");
            }
            writer.WriteLine("}");
        }

        private static void WriteParserConstructorLambda(
            IndentedTextWriter writer,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Constructor constructor,
            ISet<string> ops)
        {
            writer.Write($"const _{FixEntityName(constructor)}: any = () => ({{ ");
            writer.Write($"_: '{constructor.predicate}'");
            foreach (var param in constructor.@params)
            {
                writer.Write($", {param.name}: {FormatAccessor(types, param.type, ops)}");
            }
            writer.WriteLine(" });");
        }

        private static void WriteParserConstructor(
            IndentedTextWriter writer,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Constructor constructor,
            ISet<string> ops)
        {
            writer.WriteLine($"const _{FixEntityName(constructor)} = (): any => {{");
            using (Indent(writer))
            {
                if (HasFlags(constructor))
                {
                    writer.WriteLine("const flags = i32();");
                }
                writer.WriteLine("return {");
                using (Indent(writer))
                {
                    writer.WriteLine("_: '" + constructor.predicate + "',");
                    foreach (var param in constructor.@params)
                    {
                        if (param.type != "#")
                        {
                            writer.WriteLine($"{param.name}: {FormatAccessor(types, param.type, ops)},");
                        }
                    }
                }
                writer.WriteLine("}");
            }
            writer.WriteLine("};");
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