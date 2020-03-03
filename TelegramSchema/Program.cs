using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;

namespace TelegramSchema
{
    static class Program
    {
        static void Main(string[] args)
        {
            const string outputFolder = "../../../../output";
            GenerateTs(outputFolder, "layer105", true);
            GenerateTs(outputFolder, "layer108", true);
            GenerateTs(outputFolder, "mtproto", false);
        }

        private static void GenerateTs(string outputFolder, string schemaName, bool genRefs)
        {
            var schemaString = File.ReadAllText($"{schemaName}.json");
            var schema = JsonSerializer.Deserialize<Schema>(schemaString);

            using var fileStream = File.Open(Path.Combine(outputFolder, $"{schemaName}.ts"), FileMode.Create);
            using var writer = new StreamWriter(fileStream);

            var (typeOrder, types) = BuildTypes(schema);

            writer.Write("/* eslint-disable max-len */\n");
            writer.Write("/* eslint-disable semi-style */\n");
            writer.Write("/* eslint-disable spaced-comment */\n\n");

            writer.Write("/*******************************************************************************************/\n");
            writer.Write("/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */\n");
            writer.Write("/*                                                                                         */\n");
            writer.Write("/* Do not make changes to this file unless you know what you are doing -- modify           */\n");
            writer.Write("/* the tool instead.                                                                       */\n");
            writer.Write("/*                                                                                         */\n");
            writer.Write("/* Source: " + $"{schemaName}.json".PadRight(80, ' ') + "*/\n");
            writer.Write("/*                                                                                         */\n");
            writer.Write("/*******************************************************************************************/\n\n");

            WriteConstructors(writer, genRefs, typeOrder, types, schema.constructors);
            WriteMethods(writer, schema.methods, schema.constructors, types);
        }

        private static void WriteConstructors(
            TextWriter writer,
            bool genRefs,
            IEnumerable<string> typeOrder,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Constructor[] constructors)
        {
            writer.Write("/* CONSTRUCTORS */\n\n");
            
            foreach (var type in typeOrder.Where(t => !IsPrimitiveType(t)))
            {
                var typeName = FixTypeName(type);

                if (genRefs)
                {
                    writer.Write($"/**\n * @link https://core.telegram.org/type/{type}\n */\n");
                }

                writer.Write($"export type {typeName} =\n");
                if (types[type].Count == 0)
                {
                    writer.Write("{}");
                }
                foreach (var constructor in types[type])
                {
                    writer.Write($"  | {typeName}.{FixConstructorName(constructor.predicate)}\n");
                }

                writer.Write(";\n\n");

                writer.Write($"export namespace {typeName} {{\n");
                foreach (var constructor in types[type])
                {
                    writer.Write($"  export type {FixConstructorName(constructor.predicate)} = {{\n");
                    writer.Write($"    _: '{constructor.predicate}',\n");
                    foreach (var parameter in constructor.@params.Where(p => p.name != "flags"))
                    {
                        writer.Write($"    {parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(parameter.type, constructors)},\n");
                    }

                    writer.Write("  };\n");
                }

                writer.Write("}\n\n");
            }
            
            writer.Write("export interface ConstructorDeclMap {\n");
            foreach (var constructor in constructors)
            {
                if (!IsPrimitiveType(constructor.type))
                {
                    writer.Write($"  '{constructor.predicate}': {FixTypeName(constructor.type)}.{FixConstructorName(constructor.predicate)},\n");
                }
            }
            writer.Write("}\n\n");
        }

        private static void WriteMethods(TextWriter writer, Method[] methods, Constructor[] constructors, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            writer.Write("/* METHODS */\n\n");

            foreach (var method in methods)
            {
                var methodName = FixMethodName(method.method);
                writer.Write($"export type {methodName} = {{\n");
                foreach (var parameter in method.@params.Where(p => p.name != "flags"))
                {
                    writer.Write($"  {parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(parameter.type, constructors)},\n");
                }
                writer.Write("};\n\n");
            }

            writer.Write("export interface MethodDeclMap {\n");
            foreach (var method in methods)
            {
                var requestType = FixMethodName(method.method);
                var responseType = types.ContainsKey(method.type) ? FormatType(method.type, constructors) : "any";
                writer.Write($"  '{method.method}': {{ req: {requestType}, res: {responseType} }},\n");
            }
            writer.Write("}\n");

            if (types.ContainsKey("Update"))
            {
                writer.Write("\nexport interface UpdateDeclMap {\n");
                WriteUpdateDeclarations(writer, "Update", types);
                WriteUpdateDeclarations(writer, "Updates", types);
                WriteUpdateDeclarations(writer, "User", types);
                WriteUpdateDeclarations(writer, "Chat", types);
                writer.Write("}\n");
            }
        }

        private static void WriteUpdateDeclarations(TextWriter writer, string type, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            foreach (var updateConstructors in types[type])
            {
                writer.Write($"  '{updateConstructors.predicate}': {type}.{updateConstructors.predicate};\n");
            }
        }

        private static bool IsPrimitiveType(string type)
        {
            return type switch
            {
                "Bool" => true,
                "True" => true,
                "False" => true,
                "Null" => true,
                "Vector t" => true,
                _ => false
            };
        }

        private static bool IsOptional(string type)
        {
            return type.StartsWith("flags.");
        }

        private static string FixTypeName(string type)
        {
            return type switch
            {
                "int" => "number",
                "int64" => "string",
                "long" => "string",
                "int128" => "string",
                "int256" => "string",
                "double" => "number",
                "Bool" => "boolean",
                "false" => "boolean",
                "true" => "boolean",
                "Null" => "null",
                "string" => "string",
                "bytes" => "string",
                "!X" => "any",
                "X" => "any",
                _ => (char.ToUpper(type[0]) + type.Substring(1)).Replace(".", "")
            };
        }
        
        private static string FixConstructorName(string type)
        {
            var sb = new StringBuilder(type);
            for (var i = 0; i < sb.Length - 1; i++)
            {
                if (sb[i] == '.') sb[i + 1] = char.ToUpper(sb[i + 1]);
            }
            return sb.Replace(".", "").ToString();
        }

        private static string FixMethodName(string type)
        {
            var sb = new StringBuilder(type);
            sb[0] = char.ToUpper(sb[0]);
            for (var i = 0; i < sb.Length - 1; i++)
            {
                if (sb[i] == '.') sb[i + 1] = char.ToUpper(sb[i + 1]);
            }
            return sb.Replace(".", "").ToString();
        }

        private static string FormatType(string type, Constructor[] constructors)
        {
            var vectorMatch = Regex.Match(type, "Vector<(.+)>");
            if (vectorMatch.Success)
            {
                return FixTypeName(vectorMatch.Groups[1].Value) + "[]";
            }

            var vector2Match = Regex.Match(type, "vector<(.+)>");
            if (vector2Match.Success)
            {
                var vectorType = vector2Match.Groups[1].Value;
                if (vectorType.StartsWith('%')) return FixTypeName(vector2Match.Groups[1].Value.Substring(1)) + "[]";
                else return constructors.First(c => c.predicate == vectorType).type + "." + FixConstructorName(vector2Match.Groups[1].Value) + "[]"; 
            }

            var flagsMatch = Regex.Match(type, @"flags.(\d+)\?(.+)");
            if (flagsMatch.Success)
            {
                return FixTypeName(flagsMatch.Groups[2].Value);
            }

            return FixTypeName(type);
        }

        private static (ICollection<string>, Dictionary<string, HashSet<Constructor>>) BuildTypes(Schema schema)
        {
            var typeOrder = new List<string>();
            var types = new Dictionary<string, HashSet<Constructor>>();

            foreach (var constructor in schema.constructors)
            {
                if (!types.TryGetValue(constructor.type, out var typeConstructors))
                {
                    typeConstructors = new HashSet<Constructor>();
                    types[constructor.type] = typeConstructors;
                    typeOrder.Add(constructor.type);
                }

                typeConstructors.Add(constructor);
            }

            return (typeOrder, types);
        }
    }
}
