﻿using System.Collections.Generic;
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
            var schemaString = await File.ReadAllTextAsync("layer105.json");
            var schema = JsonSerializer.Deserialize<Schema>(schemaString);

            await using var fileStream = File.Open("layer105.ts", FileMode.Create);
            await using var writer = new StreamWriter(fileStream);

            var (typeOrder, types) = BuildTypes(schema);

            await writer.WriteAsync("/* eslint-disable max-len */\n");
            await writer.WriteAsync("/* eslint-disable semi-style */\n\n");

            await writer.WriteAsync("import { ClientError } from 'client/worker.types';\n\n");

            await writer.WriteAsync("/**\n");
            await writer.WriteAsync(" * Transform a type with required fields to type with `min` property with the corresponding meaning\n");
            await writer.WriteAsync(" * Ref: https://core.telegram.org/api/min\n");
            await writer.WriteAsync(" */\n");
            await writer.WriteAsync("export type WithMin<T> = { id: number } & ({ min: false } & T | { min: true } & Partial<T>);\n\n");
            
            await WriteConstructors(writer, typeOrder, types);
            await WriteMethods(writer, schema.methods, typeOrder, types);
        }

        private static async Task WriteConstructors(TextWriter writer, IEnumerable<string> typeOrder, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            await writer.WriteAsync("/* CONSTRUCTORS */\n\n");
            
            foreach (var type in typeOrder.Where(t => !IsPrimitiveType(t)))
            {
                var typeName = FixTypeName(type);

                await writer.WriteAsync($"/**\n * Ref: https://core.telegram.org/type/{type}\n */\n");
                await writer.WriteAsync($"export type {typeName} =\n");
                foreach (var constructor in types[type])
                {
                    await writer.WriteAsync($"  | {typeName}.{FixConstructorName(constructor.predicate)}\n");
                }

                await writer.WriteAsync(";\n\n");

                await writer.WriteAsync($"export namespace {typeName} {{\n");
                foreach (var constructor in types[type])
                {
                    var withMin = constructor.@params.Any(p => p.name == "min");
                    await writer.WriteAsync(
                        $"  export type {FixConstructorName(constructor.predicate)} = {(withMin ? "WithMin<" : "")}{{\n");
                    await writer.WriteAsync($"    _: '{constructor.predicate}',\n");
                    foreach (var parameter in constructor.@params.Where(p => p.name != "flags"))
                    {
                        await writer.WriteAsync($"    {parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(parameter.type)},\n");
                    }

                    await writer.WriteAsync($"  }}{(withMin ? ">" : "")};\n");
                }

                await writer.WriteAsync("}\n\n");
            }
        }

        private static async Task WriteMethods(TextWriter writer, Method[] methods, IEnumerable<string> typeOrder, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            await writer.WriteAsync("/* METHODS */\n\n");

            foreach (var method in methods)
            {
                var methodName = FixMethodName(method.method);
                await writer.WriteAsync($"export type {methodName} = {{\n");
                foreach (var parameter in method.@params.Where(p => p.name != "flags"))
                {
                    await writer.WriteAsync($"  {parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(parameter.type)},\n");
                }
                await writer.WriteAsync("};\n\n");
            }

            await writer.WriteAsync("type RequestResolver<T> = (err: ClientError | null, res?: T) => void;\n");
            await writer.WriteAsync("type UpdateResolver<T> = (res?: T) => void;\n\n");

            await writer.WriteAsync("export interface Client {\n");
            
            await writer.WriteAsync($"  call(method: string, data: Record<string, any>, headers: Record<string, any>, cb: RequestResolver<any>): void;\n");
            foreach (var method in methods)
            {
                var methodName = FixMethodName(method.method);
                await writer.WriteAsync($"  call(method: '{method.method}', data: {methodName}, cb?: RequestResolver<{FormatType(method.type)}>): void;\n");
            }
            
            await writer.WriteAsync("\n  updates: {\n");
            foreach (var updateConstructors in types["Update"])
            {
                await writer.WriteAsync($"    on(predicate: '{updateConstructors.predicate}', cb: UpdateResolver<Update.{updateConstructors.predicate}>): void;\n");
            }
            await writer.WriteAsync("  }\n");

            await writer.WriteAsync("}\n");
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
                "long" => "string",
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

        private static string FormatType(string type)
        {
            var vectorMatch = Regex.Match(type, "Vector<(.+)>");
            if (vectorMatch.Success)
            {
                return FixTypeName(vectorMatch.Groups[1].Value) + "[]";
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