using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using static TelegramSchema.Utils;

namespace TelegramSchema
{
    static class Builders
    {
        public static void WriteBuilders(
            string outputFolder,
            string schemaName,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Schema schema)
        {
            using var fileStream = File.Open(Path.Combine(outputFolder, $"{schemaName}.builder.ts"), FileMode.Create);
            using var streamWriter = new StreamWriter(fileStream);
            using var writer = new IndentedTextWriter(streamWriter, "  ") {NewLine = "\n"};

            writer.WriteLine(
                "/*******************************************************************************************/");
            writer.WriteLine(
                "/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */");
            writer.WriteLine(
                "/*                                                                                         */");
            writer.WriteLine(
                "/* Do not make changes to this file unless you know what you are doing -- modify           */");
            writer.WriteLine(
                "/* the tool instead.                                                                       */");
            writer.WriteLine(
                "/*                                                                                         */");
            writer.WriteLine("/* Source: " + $"{schemaName}.json".PadRight(80, ' ') + "*/");
            writer.WriteLine(
                "/*                                                                                         */");
            writer.WriteLine(
                "/*******************************************************************************************/");
            writer.WriteLine();
            writer.WriteLine("interface ByteStream {");
            writer.Indent++;
            writer.WriteLine("writeInt32(value: number) : void;");
            writer.WriteLine("writeInt64(value: string): void;");
            writer.WriteLine("writeInt128(value: string): void;");
            writer.WriteLine("writeInt256(value: string): void;");
            writer.WriteLine("writeDouble(value: number): void;");
            writer.WriteLine("writeString(value: string): void;");
            writer.WriteLine("writeBytes(value: ArrayBuffer): void;");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("let s: ByteStream;");
            writer.WriteLine("function i32(value: number) { s.writeInt32(value); }");
            writer.WriteLine();
            foreach (var type in types)
            {
                foreach (var constructor in type.Value)
                {
                    writer.WriteLine(
                        $"function _{FixConstructorName(constructor)}(o: any) {{");
                    writer.Indent++;
                    writer.WriteLine($"i32(0x{Convert.ToString(int.Parse(constructor.id), 16)});");
                    if (HasFlags(constructor))
                    {
                        writer.Write("const flags = ");
                        var prependOr = false;
                        foreach (var param in constructor.@params)
                        {
                            var flagsMatch = Regex.Match(param.type, @"flags.(\d+)\?(.+)");
                            if (flagsMatch.Success)
                            {
                                if (prependOr)
                                {
                                    writer.Write($" | ");
                                }

                                var shift = flagsMatch.Groups[1].Value;
                                if (flagsMatch.Groups[2].Value == "true")
                                {
                                    writer.Write($"+o.{param.name}");
                                }
                                else
                                {
                                    writer.Write($"+!!o.{param.name}");
                                }
                                if (shift != "0")
                                {
                                    writer.Write($" << {flagsMatch.Groups[1].Value}");
                                }
                                prependOr = true;
                            }
                        }
                        writer.WriteLine(";");
                        writer.WriteLine("i32(flags);");
                    }
                    foreach (var param in constructor.@params)
                    {
                        if (param.name != "flags" && param.type != "#")
                        {
                            var flagsMatch = Regex.Match(param.type, @"flags.(\d+)\?(.+)");
                            if (flagsMatch.Success)
                            { 
                                writer.Write($"if (o.{param.name} !== undefined) ");
                            }

                            switch (param.type)
                            {
                                case "int": 
                                    writer.WriteLine($"i32(o.{param.name});");
                                    break;
                                case "long": 
                                    writer.WriteLine($"i64(o.{param.name});");
                                    break;
                                case "int128": 
                                    writer.WriteLine($"i128(o.{param.name});");
                                    break;
                                case "int256": 
                                    writer.WriteLine($"i256(o.{param.name});");
                                    break;
                                case "double": 
                                    writer.WriteLine($"f64(o.{param.name});");
                                    break;
                                case "string": 
                                    writer.WriteLine($"str(o.{param.name});");
                                    break;
                                case "bytes": 
                                    writer.WriteLine($"bytes(o.{param.name});");
                                    break;
                                default:
                                    writer.WriteLine($"obj(o.{param.name}); // {param.type}");
                                    break;
                            }
                            
                        }
                    }

                    writer.Indent--;
                    writer.WriteLine("}");
                    writer.WriteLine("");
                }
            }

            writer.WriteLine("const builderMap: Record<string, (o: any) => void> = {");
            writer.Indent++;
            foreach (var type in types)
            {
                foreach (var constructor in type.Value)
                {
                    writer.WriteLine($"'{constructor.predicate}': _{FixConstructorName(constructor)},");
                }
            }

            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine("");
            writer.WriteLine("function obj(o: any) {");
            writer.Indent++;
            writer.WriteLine("const func = builderMap[o._];");
            writer.WriteLine("func(o);");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine("");
            writer.WriteLine("export function build(stream: ByteStream, o: any) {");
            writer.Indent++;
            writer.WriteLine("s = stream;");
            writer.WriteLine("return obj(o);");
            writer.Indent--;
            writer.WriteLine("}");
        }
    }
}
