using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using static TelegramSchema.Utils;

namespace TelegramSchema
{
    static class Builders
    {
        private static string ToHex(string i)
        {
            return "0x" + Convert.ToString(int.Parse(i), 16);
        }
        
        public static void WriteBuilders(
            string outputFolder,
            string schemaName,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Schema schema)
        {
            using var fileStream = File.Open(Path.Combine(outputFolder, $"{schemaName}.builder.ts"), FileMode.Create);
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
            writer.WriteLine("let fallbackBuilder: ((stream: ByteStream, o: any) => void) | undefined;");
            writer.WriteLine();
            foreach (var constructor in schema.constructors.Where(c => c.@params.Length > 0))
            {
                WriteEntity(schema, writer, constructor, ops);
            }
            
            foreach (var method in schema.methods.Where(c => c.@params.Length > 0))
            {
                WriteEntity(schema, writer, method, ops);
            }

            writer.WriteLine();
            writer.WriteLine("const builderMap: Record<string, [number, ((o: any) => void)?]> = {");
            writer.Indent++;
            foreach (var constructor in schema.constructors)
            {
                writer.WriteLine(constructor.@params.Length == 0
                    ? $"'{constructor.predicate}': [{ToHex(constructor.id)}],"
                    : $"'{constructor.predicate}': [{ToHex(constructor.id)}, _{FixEntityName(constructor)}],");
            }
            foreach (var method in schema.methods)
            {
                writer.WriteLine(method.@params.Length == 0
                    ? $"'{method.method}': [{ToHex(method.id)}],"
                    : $"'{method.method}': [{ToHex(method.id)}, _{FixEntityName(method)}],");
            }

            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            if (ops.Contains("i32")) writer.WriteLine("function i32(value: number) { s.writeInt32(value); }");
            if (ops.Contains("i64")) writer.WriteLine("function i64(value: string) { s.writeInt64(value); }");
            if (ops.Contains("i128")) writer.WriteLine("function i128(value: string) { s.writeInt128(value); }");
            if (ops.Contains("i256")) writer.WriteLine("function i256(value: string) { s.writeInt256(value); }");
            if (ops.Contains("f64")) writer.WriteLine("function f64(value: number) { s.writeDouble(value); }");
            if (ops.Contains("str")) writer.WriteLine("function str(value: string) { s.writeString(value); }");
            if (ops.Contains("bytes")) writer.WriteLine("function bytes(value: ArrayBuffer) { s.writeBytes(value); }");
            writer.WriteLine();
            if (ops.Contains("bool")) writer.WriteLine("function bool(value: boolean) { i32(builderMap[value ? 'boolTrue' : 'boolFalse'][0]); }");
            writer.WriteLine();
            var vectorConstructor = schema.constructors.FirstOrDefault(c => c.predicate == "vector");
            if (vectorConstructor != null && ops.Contains("vector"))
            {
                writer.WriteLine("function vector(fn: (value: any) => void, value: Array<any>, ctorId?: number) {");
                writer.Indent++;
                writer.WriteLine($"i32({ToHex(vectorConstructor.id)});");
                writer.WriteLine("i32(value.length);");
                writer.WriteLine("for (let i = 0; i < value.length; i++) {");
                writer.Indent++;
                writer.WriteLine("if (ctorId != undefined) i32(ctorId);");
                writer.WriteLine("fn(value[i]);");
                writer.Indent--;
                writer.WriteLine("}");
                writer.Indent--;
                writer.WriteLine("}");
                writer.WriteLine();
            }

            if (ops.Contains("flagVector"))
            {
                writer.WriteLine("function flagVector(fn: (value: any) => void, value: Array<any>, ctorId?: number) {");
                writer.Indent++;
                writer.WriteLine("if (value === undefined || value.length === 0) return;");
                writer.WriteLine("vector(fn, value, ctorId);");
                writer.Indent--;
                writer.WriteLine("}");
                writer.WriteLine();
            }

            if (ops.Contains("flag"))
            {
                writer.WriteLine("function flag(fn: (value: any) => void, value: any) {");
                writer.Indent++;
                writer.WriteLine("if (has(value)) fn(value);");
                writer.Indent--;
                writer.WriteLine("}");
                writer.WriteLine();
                writer.WriteLine("function has(value: any) {");
                writer.Indent++;
                writer.WriteLine("return Array.isArray(value) ? +!!value.length : +!!value;");
                writer.Indent--;
                writer.WriteLine("}");
                writer.WriteLine();
            }

            writer.WriteLine("function obj(o: any, bare = false) {");
            writer.Indent++;
            writer.WriteLine("const descriptor = builderMap[o._];");
            writer.WriteLine("if (descriptor) {");
            writer.Indent++;
            writer.WriteLine("const [id, fn] = descriptor;");
            writer.WriteLine("if (!bare) i32(id);");
            writer.WriteLine("if (fn) fn(o);");
            writer.Indent--;
            writer.WriteLine("} else if (fallbackBuilder) fallbackBuilder(s, o);");
            writer.WriteLine("else {");
            writer.Indent++;
            writer.WriteLine("console.error('Cannot serialize object', o);");
            writer.Indent--;
            writer.WriteLine("}");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("export default function build(stream: ByteStream, o: any, fallback?: (stream: ByteStream, o: any) => void) {");
            writer.Indent++;
            writer.WriteLine("s = stream;");
            writer.WriteLine("fallbackBuilder = fallback;");
            writer.WriteLine("return obj(o);");
            writer.Indent--;
            writer.WriteLine("}");
        }

        private static void WriteEntity(Schema schema, IndentedTextWriter writer, IEntity entity, ISet<string> ops)
        {
            writer.WriteLine($"const _{FixEntityName(entity)} = (o: any) => {{");

            writer.Indent++;
            if (HasFlags(entity))
            {
                ops.Add("flag");
                writer.WriteLine("const flags = ");
                writer.Indent++;
                var first = true;
                foreach (var param in entity.@params)
                {
                    var (flag, _, _) = ParseType(param.type);
                    if (flag.HasValue)
                    {
                        writer.Write(first ? "  " : "| ");
                        writer.Write($"has(o.{param.name})");
                        if (flag.Value > 0)
                        {
                            writer.Write($" << {flag.Value}");
                        }

                        writer.WriteLine(param != entity.@params.Last() ? "" : ";");
                        first = false;
                    }
                }

                writer.Indent--;
                writer.WriteLine("i32(flags);");
            }

            foreach (var param in entity.@params)
            {
                var (flag, vector, pType) = ParseType(param.type);
                if (param.name == "flags" || pType == "#" || pType == "true")
                {
                    continue;
                }

                if (vector)
                {
                    var ctor = schema.constructors.FirstOrDefault(c => c.predicate == pType);
                    var op = TypeNameToBuilderOp(pType);
                    ops.Add(op);
                    ops.Add(flag.HasValue ? "flagVector" : "vector");
                    var b = ctor != null ? $"_{FixEntityName(ctor)}" :  TypeNameToBuilderOp(pType);
                    writer.WriteLine(flag.HasValue
                        ? $"flagVector({b}, o.{param.name});"
                        : $"vector({b}, o.{param.name});");
                }
                else
                {
                    var op = TypeNameToBuilderOp(pType);
                    ops.Add(op);
                    writer.WriteLine(flag.HasValue ? $"flag({op}, o.{param.name});" : $"{op}(o.{param.name});");
                }
            }

            writer.Indent--;
            writer.WriteLine("};");
            writer.WriteLine();
        }

        private static string TypeNameToBuilderOp(string type)
        {
            return type switch
            {
                "int" => "i32",
                "long" => "i64",
                "int128" => "i128",
                "int256" => "i256",
                "double" => "f64",
                "string" => "str",
                "bytes" => "bytes",
                "Bool" => "bool",
                _ => "obj"
            };
        }
    }
}
