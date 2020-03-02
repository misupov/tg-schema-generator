using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace TelegramSchema
{
    static class Program
    {
        static async Task Main(string[] args)
        {
            await GenerateTs("layer105", true);
            await GenerateTs("mtproto", false);
        }

        private static async Task GenerateTs(string schemaName, bool genRefs)
        {
            var schemaString = await File.ReadAllTextAsync($"{schemaName}.json");
            var schema = JsonSerializer.Deserialize<Schema>(schemaString);

            await using var fileStream = File.Open($"{schemaName}.ts", FileMode.Create);
            await using var writer = new StreamWriter(fileStream);

            var (typeOrder, types) = BuildTypes(schema);

            await writer.WriteAsync("/* eslint-disable max-len */\n");
            await writer.WriteAsync("/* eslint-disable semi-style */\n");
            await writer.WriteAsync("/* eslint-disable spaced-comment */\n\n");

            await writer.WriteAsync("/*******************************************************************************************/\n");
            await writer.WriteAsync("/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */\n");
            await writer.WriteAsync("/*                                                                                         */\n");
            await writer.WriteAsync("/* Do not make changes to this file unless you know what you are doing -- modify           */\n");
            await writer.WriteAsync("/* the tool instead.                                                                       */\n");
            await writer.WriteAsync("/*                                                                                         */\n");
            await writer.WriteAsync("/* Source: " + $"{schemaName}.json".PadRight(80, ' ') + "*/\n");
            await writer.WriteAsync("/*                                                                                         */\n");
            await writer.WriteAsync("/*******************************************************************************************/\n\n");

            await WriteConstructors(writer, genRefs, typeOrder, types, schema.constructors);
            await WriteMethods(writer, schema.methods, schema.constructors, typeOrder, types);
        }

        private static async Task WriteConstructors(
            TextWriter writer,
            bool genRefs,
            IEnumerable<string> typeOrder,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Constructor[] constructors)
        {
            await writer.WriteAsync("/* CONSTRUCTORS */\n\n");
            
            foreach (var type in typeOrder.Where(t => !IsPrimitiveType(t)))
            {
                var typeName = FixTypeName(type);

                if (genRefs)
                {
                    await writer.WriteAsync($"/**\n * Ref: https://core.telegram.org/type/{type}\n */\n");
                }

                await writer.WriteAsync($"export type {typeName} =\n");
                if (types[type].Count == 0)
                {
                    await writer.WriteAsync("{}");
                }
                foreach (var constructor in types[type])
                {
                    await writer.WriteAsync($"  | {typeName}.{FixConstructorName(constructor.predicate)}\n");
                }

                await writer.WriteAsync(";\n\n");

                await writer.WriteAsync($"export namespace {typeName} {{\n");
                foreach (var constructor in types[type])
                {
                    await writer.WriteAsync($"  export type {FixConstructorName(constructor.predicate)} = {{\n");
                    await writer.WriteAsync($"    _: '{constructor.predicate}',\n");
                    foreach (var parameter in constructor.@params.Where(p => p.name != "flags"))
                    {
                        await writer.WriteAsync($"    {parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(parameter.type, constructors)},\n");
                    }

                    await writer.WriteAsync("  };\n");
                }

                await writer.WriteAsync("}\n\n");
            }
            
            await writer.WriteAsync("export interface ConstructorDeclMap {\n");
            foreach (var constructor in constructors)
            {
                if (!IsPrimitiveType(constructor.type))
                {
                    await writer.WriteAsync($"  '{constructor.predicate}': {FixTypeName(constructor.type)}.{FixConstructorName(constructor.predicate)},\n");
                }
            }
            await writer.WriteAsync("}\n\n");
        }

        private static async Task WriteMethods(TextWriter writer, Method[] methods, Constructor[] constructors, IEnumerable<string> typeOrder, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            await writer.WriteAsync("/* METHODS */\n\n");

            foreach (var method in methods)
            {
                var methodName = FixMethodName(method.method);
                await writer.WriteAsync($"export type {methodName} = {{\n");
                foreach (var parameter in method.@params.Where(p => p.name != "flags"))
                {
                    await writer.WriteAsync($"  {parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(parameter.type, constructors)},\n");
                }
                await writer.WriteAsync("};\n\n");
            }

            await writer.WriteAsync("export interface MethodDeclMap {\n");
            foreach (var method in methods)
            {
                var requestType = FixMethodName(method.method);
                var responseType = types.ContainsKey(method.type) ? FormatType(method.type, constructors) : "any";
                await writer.WriteAsync($"  '{method.method}': {{ req: {requestType}, res: {responseType} }},\n");
            }
            await writer.WriteAsync("}\n");

            if (types.ContainsKey("Update"))
            {
                await writer.WriteAsync("\nexport interface UpdateDeclMap {\n");
                await WriteUpdateDeclarations(writer, "Update", types);
                await WriteUpdateDeclarations(writer, "Updates", types);
                await WriteUpdateDeclarations(writer, "User", types);
                await WriteUpdateDeclarations(writer, "Chat", types);
                await writer.WriteAsync("}\n");
            }
        }

        private static async Task WriteUpdateDeclarations(TextWriter writer, string type, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            foreach (var updateConstructors in types[type])
            {
                await writer.WriteAsync($"  '{updateConstructors.predicate}': {type}.{updateConstructors.predicate};\n");
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