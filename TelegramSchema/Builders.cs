using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using static TelegramSchema.Utils;
using static TelegramSchema.Indentation;

namespace TelegramSchema
{
    static class Builders
    {
        private static string ToHex(string i)
        {
            if (long.Parse(i) > int.MaxValue)
            {
                return "0x" + Convert.ToString(uint.Parse(i), 16);
            }

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
            var isMultilayer = IsMultiLayer(schema);

            GeneratedFileNotice.Write(writer, schemaName);
            writer.WriteLine("interface Writer {");
            using (Indent(writer))
            {
                writer.WriteLine("int32(value: number) : void;");
                writer.WriteLine("long(value: string): void;");
                writer.WriteLine("int128(value: Uint32Array): void;");
                writer.WriteLine("int256(value: Uint32Array): void;");
                writer.WriteLine("double(value: number): void;");
                writer.WriteLine("string(value: string): void;");
                writer.WriteLine("bytes(value: ArrayBuffer | SharedArrayBuffer | Uint8Array): void;");
            }
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("let w: Writer;");
            if (isMultilayer) writer.WriteLine("let l = 0;");
            writer.WriteLine("let fallbackBuilder: ((stream: Writer, o: any) => void) | undefined;");
            writer.WriteLine();
            writer.WriteLine($"export default function build(writer: Writer, o: any{(isMultilayer ? ", layer: number" : "")}, fallback?: (stream: Writer, o: any) => void) {{");
            using (Indent(writer))
            {
                writer.WriteLine("w = writer;");
                writer.WriteLine("fallbackBuilder = fallback;");
                if (isMultilayer) writer.WriteLine("l = layer;");
                writer.WriteLine("return obj(o);");
            }
            writer.WriteLine("}");
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
            var prevLayer = 0;
            var groups = schema.constructors.GroupBy(c => c.layer).ToArray();
            foreach (var group in groups.OrderBy(g => g.Key))
            {
                WriteBuilderMap(writer, schema, group.Key, prevLayer);
                prevLayer = group.Key;
            }

            if (groups.Count() > 1)
            {
                writer.WriteLine($"const builderMaps = new Map<number, Record<string, [number, ((o: any) => void)?]>>([");
                using (Indent(writer))
                {
                    foreach (var group in groups)
                    {
                        writer.WriteLine($"[{group.Key}, builderMap{group.Key}],");
                    }
                }
                writer.WriteLine("]);");
                writer.WriteLine();
            } 
            if (ops.Contains("i32")) writer.WriteLine("const i32 = (value: number) => w.int32(value);");
            if (ops.Contains("i64")) writer.WriteLine("const i64 = (value: string) => w.long(value);");
            if (ops.Contains("i128")) writer.WriteLine("const i128 = (value: Uint32Array) => w.int128(value);");
            if (ops.Contains("i256")) writer.WriteLine("const i256 = (value: Uint32Array) => w.int256(value);");
            if (ops.Contains("f64")) writer.WriteLine("const f64 = (value: number) => w.double(value);");
            if (ops.Contains("str")) writer.WriteLine("const str = (value: string) => w.string(value);");
            if (ops.Contains("bytes")) writer.WriteLine("const bytes = (value: ArrayBuffer) => w.bytes(value);");
            if (ops.Contains("bool")) writer.WriteLine("const bool = (value: boolean) => i32(builderMap[value ? 'boolTrue' : 'boolFalse'][0]);");
            writer.WriteLine();
            var vectorConstructor = schema.constructors.FirstOrDefault(c => c.predicate == "vector");
            if (vectorConstructor != null && ops.Contains("vector"))
            {
                writer.WriteLine("const vector = (fn: (value: any) => void, value: Array<any>) => {");
                using (Indent(writer))
                {
                    writer.WriteLine($"i32({ToHex(vectorConstructor.id)});");
                    writer.WriteLine("i32(value.length);");
                    writer.WriteLine("for (let i = 0; i < value.length; i++) {");
                    using (Indent(writer)) writer.WriteLine("fn(value[i]);");
                    writer.WriteLine("}");
                }
                writer.WriteLine("};");
                writer.WriteLine();
            }

            if (ops.Contains("flagVector"))
            {
                writer.WriteLine("function flagVector(fn: (value: any) => void, value: Array<any>) {");
                using (Indent(writer))
                {
                    writer.WriteLine("if (value === undefined || value.length === 0) return;");
                    writer.WriteLine("vector(fn, value);");
                }
                writer.WriteLine("}");
                writer.WriteLine();
            }

            if (ops.Contains("flag"))
            {
                writer.WriteLine("function flag(fn: (value: any) => void, value: any) {");
                using (Indent(writer)) writer.WriteLine("if (has(value)) fn(value);");
                writer.WriteLine("}");
                writer.WriteLine();
                writer.WriteLine("function has(value: any) {");
                using (Indent(writer)) writer.WriteLine("return Array.isArray(value) ? +!!value.length : +!!value;");
                writer.WriteLine("}");
                writer.WriteLine();
            }

            writer.WriteLine("const obj = (o: any, bare = false) => {");
            using (Indent(writer))
            {
                var isMultiLayer = IsMultiLayer(schema);
                writer.WriteLine(!isMultiLayer
                    ? "const descriptor = builderMap[o._];"
                    : "const descriptor = builderMaps.get(l)[o._];");

                writer.WriteLine("if (descriptor) {");
                using (Indent(writer))
                {
                    writer.WriteLine("const [id, fn] = descriptor;");
                    writer.WriteLine("if (!bare) i32(id);");
                    writer.WriteLine("if (fn) fn(o);");
                }

                writer.WriteLine("} else if (fallbackBuilder) {");
                using (Indent(writer)) writer.WriteLine("fallbackBuilder(w, o);");
                writer.WriteLine("} else {");
                using (Indent(writer)) writer.WriteLine("console.error(`Cannot serialize object ${JSON.stringify(o)}`);");
                writer.WriteLine("}");
            }
            writer.WriteLine("};");
        }

        private static bool IsMultiLayer(Schema schema)
        {
            return schema.constructors.GroupBy(c => c.layer).Count() > 1;
        }

        private static void WriteBuilderMap(IndentedTextWriter writer, Schema schema, int layer, int prevLayer)
        {
            writer.WriteLine($"const builderMap{(layer > 0 ? layer.ToString(CultureInfo.InvariantCulture) : "")}: Record<string, [number, ((o: any) => void)?]> = {{");
            using (Indent(writer))
            {
                if (prevLayer > 0)
                {
                    writer.WriteLine($"...builderMap{prevLayer},");
                }
                foreach (var constructor in schema.constructors.Where(c => c.layer == layer))
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
            }

            writer.WriteLine("};");
            writer.WriteLine();
        }

        private static void WriteEntity(Schema schema, IndentedTextWriter writer, IEntity entity, ISet<string> ops)
        {
            writer.WriteLine($"const _{FixEntityName(entity)} = (o: any) => {{");
            using (Indent(writer))
            {
                if (HasFlags(entity))
                {
                    ops.Add("flag");
                    writer.Write("const flags =");
                    using (Indent(writer))
                    {
                        var first = true;
                        foreach (var param in entity.@params)
                        {
                            var (flag, _, _) = ParseType(param.type);
                            if (flag.HasValue)
                            {
                                writer.WriteLine();
                                writer.Write(first ? "  " : "| ");
                                writer.Write(flag.Value > 0
                                    ? $"(has(o.{param.name}) << {flag.Value})"
                                    : $"has(o.{param.name})");

                                first = false;
                            }
                        }
                        writer.WriteLine(";");

                        if (first)
                        {
                            writer.WriteLine("0;");
                        }
                    }

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
                        var b = ctor != null ? $"_{FixEntityName(ctor)}" : TypeNameToBuilderOp(pType);
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
            }
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
