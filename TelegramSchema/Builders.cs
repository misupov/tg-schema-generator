using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using static TelegramSchema.Utils;

namespace TelegramSchema
{
    class Builders
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
            writer.WriteLine("writeUint32(value: number): void;");
            writer.WriteLine("writeInt64(value: string): void;");
            writer.WriteLine("writeInt128(value: string): void;");
            writer.WriteLine("writeInt256(value: string): void;");
            writer.WriteLine("writeDouble(value: number): void;");
            writer.WriteLine("writeString(value: string): void;");
            writer.WriteLine("writeBytes(value: ArrayBuffer): void;");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("function i32(s: ByteStream, value: number) {");
            writer.Indent++;
            writer.WriteLine("s.writeInt32(value);");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine("");
            foreach (var type in types)
            {
                foreach (var constructor in type.Value)
                {
                    writer.WriteLine(
                        $"function _{FixConstructorName(constructor.predicate)}(s: ByteStream, o: any) {{");
                    writer.Indent++;
                    writer.WriteLine($"i32(s, 0x{Convert.ToString(int.Parse(constructor.id), 16)});");
                    if (constructor.@params.Any(p => p.name == "flags" && p.type == "#"))
                    {
                        writer.Write($"const flags = ");
                        bool prependOr = false;
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
                        writer.WriteLine("i32(s, flags);");
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
                                    writer.WriteLine($"i32(s, o.{param.name});");
                                    break;
                                default:
                                    writer.WriteLine($"o.{param.name}");
                                    break;
                            }
                            
                        }
                    }

                    writer.Indent--;
                    writer.WriteLine("}");
                    writer.WriteLine("");
                }
            }

            writer.WriteLine("const builderMap: Record<string, (s: ByteStream, o: any) => void> = {");
            writer.Indent++;
            foreach (var type in types)
            {
                foreach (var constructor in type.Value)
                {
                    writer.WriteLine($"'{constructor.predicate}': _{FixConstructorName(constructor.predicate)},");
                }
            }

            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine("");
            writer.WriteLine("function obj(s: ByteStream, o: any) {");
            writer.Indent++;
            writer.WriteLine("const func = builderMap[o._];");
            writer.WriteLine("func(s, o);");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine("");
            writer.WriteLine("export function build(s: ByteStream, o: any) {");
            writer.Indent++;
            writer.WriteLine("return obj(s, o);");
            writer.Indent--;
            writer.WriteLine("}");
        }
    }
}
