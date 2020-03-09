using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using static TelegramSchema.Utils;

namespace TelegramSchema
{
    internal static class Declarations
    {
        public static void WriteDeclarations(
            string outputFolder,
            string schemaName,
            bool genRefs,
            IEnumerable<string> typeOrder,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Schema schema)
        {
            using var fileStream = File.Open(Path.Combine(outputFolder, $"{schemaName}.d.ts"), FileMode.Create);
            using var streamWriter = new StreamWriter(fileStream);
            using var writer = new IndentedTextWriter(streamWriter, "  ") {NewLine = "\n"};

            writer.WriteLine("/* eslint-disable max-len */");
            writer.WriteLine("/* eslint-disable semi-style */");
            writer.WriteLine("/* eslint-disable spaced-comment */");
            writer.WriteLine();
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

            WriteConstructors(writer, genRefs, typeOrder, types, schema.constructors);
            WriteMethods(writer, schema.methods, schema.constructors, types);
        }

        private static void WriteConstructors(
            IndentedTextWriter writer,
            bool genRefs,
            IEnumerable<string> typeOrder,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Constructor[] constructors)
        {
            writer.WriteLine("/* CONSTRUCTORS */");
            writer.WriteLine();
            
            foreach (var type in typeOrder.Where(t => !IsPrimitiveType(t)))
            {
                var typeName = FixTypeName(type);

                if (genRefs)
                {
                    writer.WriteLine("/**");
                    writer.WriteLine($" * @link https://core.telegram.org/type/{type}");
                    writer.WriteLine(" */");
                }

                writer.WriteLine($"export type {typeName} =");
                if (types[type].Count == 0)
                {
                    writer.Write("{}");
                }
                foreach (var constructor in types[type])
                {
                    writer.WriteLine($"  | {typeName}.{FixConstructorName(constructor)}");
                }

                writer.WriteLine(";");
                writer.WriteLine();

                writer.WriteLine($"export namespace {typeName} {{");
                foreach (var constructor in types[type])
                {
                    writer.Indent++;
                    writer.WriteLine($"export type {FixConstructorName(constructor)} = {{");
                    writer.Indent++;
                    writer.WriteLine($"_: '{constructor.predicate}',");
                    if (constructor.layer > 0)
                    {
                        writer.WriteLine($"_layer: {constructor.layer},");
                    }
                    foreach (var parameter in constructor.@params.Where(p => p.name != "flags"))
                    {
                        writer.WriteLine($"{parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(types, parameter.type, constructors)},");
                    }
                    writer.Indent--;
                    writer.WriteLine("};");
                    writer.Indent--;
                }

                writer.WriteLine("}");
                writer.WriteLine();
            }
            
            writer.WriteLine("export interface ConstructorDeclMap {");
            writer.Indent++;
            
            foreach (var group in constructors.GroupBy(c => c.predicate))
            {
                var first = group.First();
                if (!IsPrimitiveType(first.type))
                {
                    var decls = group.Select(c => $"{FixTypeName(c.type)}.{FixConstructorName(c)}").ToArray();
                    writer.WriteLine($"'{first.predicate}': {string.Join(" | ", decls)},");
                }
            }
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
        }

        private static void WriteMethods(IndentedTextWriter writer, Method[] methods, Constructor[] constructors, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            writer.WriteLine("/* METHODS */");
            writer.WriteLine();

            foreach (var method in methods)
            {
                var methodName = FixMethodName(method.method);
                writer.WriteLine($"export type {methodName} = {{");
                writer.Indent++;
                foreach (var parameter in method.@params.Where(p => p.name != "flags"))
                {
                    writer.WriteLine($"{parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(types, parameter.type, constructors)},");
                }
                writer.Indent--;
                writer.WriteLine("};");
                writer.WriteLine();
            }

            writer.WriteLine("export interface MethodDeclMap {");
            writer.Indent++;
            foreach (var method in methods)
            {
                var requestType = FixMethodName(method.method);
                var responseType = types.ContainsKey(UnwrapVector(method.type)) ? FormatType(types, method.type, constructors) : "any";
                writer.WriteLine($"'{method.method}': {{ req: {requestType}, res: {responseType} }},");
            }
            writer.Indent--;
            writer.WriteLine("}");

            if (types.ContainsKey("Update"))
            {
                writer.WriteLine();
                writer.WriteLine("export interface UpdateDeclMap {");
                writer.Indent++;
                WriteUpdateDeclarations(writer, "Update", types);
                WriteUpdateDeclarations(writer, "Updates", types);
                WriteUpdateDeclarations(writer, "User", types);
                WriteUpdateDeclarations(writer, "Chat", types);
                writer.Indent--;
                writer.WriteLine("}");
            }
        }

        private static void WriteUpdateDeclarations(IndentedTextWriter writer, string type, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            foreach (var updateConstructors in types[type])
            {
                writer.WriteLine($"'{updateConstructors.predicate}': {type}.{updateConstructors.predicate};");
            }
        }

    }
}