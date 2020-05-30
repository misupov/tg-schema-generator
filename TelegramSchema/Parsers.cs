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
            writer.WriteLine("interface Reader {");
            using (Indent(writer))
            {
                writer.WriteLine("int32(): number;");
                writer.WriteLine("long(): string;");
                writer.WriteLine("int128(): Uint32Array;");
                writer.WriteLine("int256(): Uint32Array;");
                writer.WriteLine("double(): number;");
                writer.WriteLine("string(): string;");
                writer.WriteLine("bytes(): ArrayBuffer;");
                writer.WriteLine("rollback(): void;");
            }
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("let r: Reader;");
            writer.WriteLine("let fallbackParse: ((stream: Reader) => any) | undefined;");
            writer.WriteLine();
            writer.WriteLine("export default function parse(reader: Reader, fallback?: (stream: Reader) => any) {");
            using (Indent(writer))
            {
                writer.WriteLine("r = reader;");
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
                    var constructorIdLong = long.Parse(constructor.id);
                    var constructorId = (uint) constructorIdLong;
                    writer.WriteLine($"[0x{constructorId:x}, _{FixEntityName(constructor)}],");
                }
            }
            writer.WriteLine("]);");
            writer.WriteLine();
            if (ops.Contains("u")) writer.WriteLine("const u = undefined;");
            if (ops.Contains("i32")) writer.WriteLine("const i32 = () => r.int32();");
            if (ops.Contains("i64")) writer.WriteLine("const i64 = () => r.long();");
            if (ops.Contains("i128")) writer.WriteLine("const i128 = () => r.int128();");
            if (ops.Contains("i256")) writer.WriteLine("const i256 = () => r.int256();");
            if (ops.Contains("f64")) writer.WriteLine("const f64 = () => r.double();");
            if (ops.Contains("str")) writer.WriteLine("const str = () => r.string();");
            if (ops.Contains("bytes")) writer.WriteLine("const bytes = () => r.bytes();");
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
                writer.WriteLine("if (f) return f();");
                writer.WriteLine("if (fallbackParse) {");
                using (Indent(writer))
                {
                    writer.WriteLine("r.rollback();");
                    writer.WriteLine("return fallbackParse(r);");
                }
                writer.WriteLine("}");
                writer.WriteLine("console.error(`Unknown constructor 0x${c.toString(16)}.`);");
                writer.WriteLine("return undefined;");
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
            if (constructor.type == "Update" || constructor.type == "Updates")
            {
                writer.Write($", _update: true");
            }
            foreach (var param in constructor.@params)
            {
                writer.Write($", {param.name}: {FormatAccessorMandatory(types, param.type, ops)}");
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
                // if (HasFlags(constructor))
                // {
                //     writer.WriteLine("const flags = i32();");
                // }
                // writer.WriteLine("return {");
                // using (Indent(writer))
                // {
                //     writer.WriteLine("_: '" + constructor.predicate + "',");
                //     if (constructor.type == "Update" || constructor.type == "Updates")
                //     {
                //         writer.WriteLine($"_update: true,");
                //     }
                //     foreach (var param in constructor.@params)
                //     {
                //         if (param.type != "#")
                //         {
                //             writer.WriteLine($"{param.name}: {FormatAccessor(types, param.type, ops)},");
                //         }
                //     }
                // }
                // writer.WriteLine("};");
                writer.WriteLine($"const result: Record<string, unknown> = {{ _: '{constructor.predicate}' }};");
                if (constructor.type == "Update" || constructor.type == "Updates")
                {
                    writer.WriteLine("result._update = true;");
                }
                foreach (var param in constructor.@params)
                {
                    writer.WriteLine(param.type == "#" ? "const flags = i32();" : FormatAccessor(types, param, ops));
                }
                writer.WriteLine("return result;");
            }
            writer.WriteLine("};");
        }
        
        private static string FormatAccessor(IReadOnlyDictionary<string, HashSet<Constructor>> types, Parameter param, ISet<string> ops)
        {
            var paramType = param.type;
            var flagsMatch = Regex.Match(paramType, @"flags\.(.+)\?(.*)");
            var bit = -1;
            if (flagsMatch.Success)
            {
                bit = int.Parse(flagsMatch.Groups[1].Value);
                paramType = flagsMatch.Groups[2].Value;
            }
            switch (paramType)
            {
                case "true": return bit >= 0
                    ? ($"result.{param.name} = !!(flags & 0x" + Convert.ToString(1 << bit, 16) + ");")
                    : ($"result.{param.name} = {FormatAccessorMandatory(types, paramType, ops)};"); 
                default:
                    if (bit >= 0)
                    {
                        return $"if (flags & 0x{Convert.ToString(1 << bit, 16)}) result.{param.name} = " + FormatAccessorMandatory(types, paramType, ops) + ";";
                    }
                    else
                    {
                        return $"result.{param.name} = " + FormatAccessorMandatory(types, paramType, ops) + ";";
                    }
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