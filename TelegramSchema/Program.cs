using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;

namespace TelegramSchema
{
    class SpaceIndentedTextWriter : IndentedTextWriter
    {
        public SpaceIndentedTextWriter(TextWriter writer) : base(writer)
        {
        }

        public SpaceIndentedTextWriter(TextWriter writer, string tabString) : base(writer, tabString)
        {
        }
        
        protected override void OutputTabs()
        {
            this.InnerWriter.Write(new string(' ', this.Indent * 2));
        }
    } 
    
    static class Program
    {
        static void Main(string[] args)
        {
            const string outputFolder = "../../../../output";
            GenerateTs(outputFolder, "layer105", true);
            GenerateTs(outputFolder, "layer108", true);
            GenerateTs(outputFolder, "mtproto", false);
            GenerateTs(outputFolder, "end-to-end", false);
        }

        private static void GenerateTs(string outputFolder, string schemaName, bool genRefs)
        {
            var schemaString = File.ReadAllText($"{schemaName}.json");
            var schema = JsonSerializer.Deserialize<Schema>(schemaString);
            var (typeOrder, types) = BuildTypes(schema);

            WriteParsers(outputFolder, schemaName, types, schema);
            WriteTsDeclarations(outputFolder, schemaName, genRefs, typeOrder, types, schema);
        }

        private static void WriteParsers(
            string outputFolder,
            string schemaName,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Schema schema)
        {
            using var fileStream = File.Open(Path.Combine(outputFolder, $"{schemaName}.parser.ts"), FileMode.Create);
            using var streamWriter = new StreamWriter(fileStream);
            using var writer = new SpaceIndentedTextWriter(streamWriter);
           
            writer.Write("class MessageParser {\n");
            writer.Indent++;
            writer.Write("readInt(): number {}\n");
            writer.Write("readLong(): string {}\n");
            writer.Write("readString(): string {}\n");
            writer.Write("readObject() {}\n");
            writer.Write("private src: Bytes;\n");
            writer.Write("private offset: number;\n\n");
            foreach (var constructor in schema.constructors)
            {
                WriteParserConstructor(writer, constructor);
            }
        }

        private static void WriteParserConstructor(IndentedTextWriter writer, Constructor constructor)
        {
            writer.Write(constructor.predicate.Replace('.', '_') + "() {\n");
            writer.Indent++;
            if (constructor.@params.Any(p => p.type == "#"))
            {
                writer.Write("const flags = this.readInt();\n");
            }

            writer.Write("return {\n");
            writer.Indent++;
            writer.Write("_: '" + constructor.predicate + "',\n");
            foreach (var param in constructor.@params)
            {
                if (param.type != "#")
                {
                    writer.Write(param.name + ": " + FormatAccessor(param.type) + ",\n");
                }
            }
            writer.Indent--;
            writer.Write("}\n");
            writer.Indent--;
            writer.Write("}\n\n");
        }

        private static string FormatAccessor(string paramType)
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
                case "true": return bit >= 0 ? ("!!(flags & 0x" + (1 << bit) + ")") : FormatAccessorMandatory(paramType); 
                default: return bit >= 0 ? (("(flags & 0x" + (1 << bit) + ") ? ") + FormatAccessorMandatory(paramType) + " : undefined") : FormatAccessorMandatory(paramType); 
            }
        }
        
        private static string FormatAccessorMandatory(string paramType)
        {
            switch (paramType)
            {
                case "int": return "this.readInt()";
                case "long": return "this.readLong()";
                case "string": return "this.readString()";
                default: return "this.readObject()"; 
            }
        }

        private static void WriteTsDeclarations(
            string outputFolder,
            string schemaName,
            bool genRefs,
            IEnumerable<string> typeOrder,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Schema schema)
        {
            using var fileStream = File.Open(Path.Combine(outputFolder, $"{schemaName}.d.ts"), FileMode.Create);
            using var streamWriter = new StreamWriter(fileStream);
            using var writer = new SpaceIndentedTextWriter(streamWriter);

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
            IndentedTextWriter writer,
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
                    writer.Write($"  | {typeName}.{FixConstructorName(constructor.predicate)}{(constructor.layer > 0 ? constructor.layer.ToString() : "")}\n");
                }

                writer.Write(";\n\n");

                writer.Write($"export namespace {typeName} {{\n");
                foreach (var constructor in types[type])
                {
                    writer.Indent++;
                    writer.Write($"export type {FixConstructorName(constructor.predicate)}{(constructor.layer > 0 ? constructor.layer.ToString() : "")} = {{\n");
                    writer.Indent++;
                    writer.Write($"_: '{constructor.predicate}',\n");
                    foreach (var parameter in constructor.@params.Where(p => p.name != "flags"))
                    {
                        writer.Write($"{parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(parameter.type, constructors)},\n");
                    }
                    writer.Indent--;
                    writer.Write("};\n");
                    writer.Indent--;
                }

                writer.Write("}\n\n");
            }
            
            writer.Write("export interface ConstructorDeclMap {\n");
            writer.Indent++;
            foreach (var constructor in constructors)
            {
                if (!IsPrimitiveType(constructor.type))
                {
                    writer.Write($"'{constructor.predicate}': {FixTypeName(constructor.type)}.{FixConstructorName(constructor.predicate)},\n");
                }
            }
            writer.Indent--;
            writer.Write("}\n\n");
        }

        private static void WriteMethods(IndentedTextWriter writer, Method[] methods, Constructor[] constructors, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            writer.Write("/* METHODS */\n\n");

            foreach (var method in methods)
            {
                var methodName = FixMethodName(method.method);
                writer.Write($"export type {methodName} = {{\n");
                writer.Indent++;
                foreach (var parameter in method.@params.Where(p => p.name != "flags"))
                {
                    writer.Write($"{parameter.name}{(IsOptional(parameter.type) ? "?" : "")}: {FormatType(parameter.type, constructors)},\n");
                }
                writer.Indent--;
                writer.Write("};\n\n");
            }

            writer.Write("export interface MethodDeclMap {\n");
            writer.Indent++;
            foreach (var method in methods)
            {
                var requestType = FixMethodName(method.method);
                var responseType = types.ContainsKey(UnwrapVector(method.type)) ? FormatType(method.type, constructors) : "any";
                writer.Write($"'{method.method}': {{ req: {requestType}, res: {responseType} }},\n");
            }
            writer.Indent--;
            writer.Write("}\n");

            if (types.ContainsKey("Update"))
            {
                writer.Write("\nexport interface UpdateDeclMap {\n");
                writer.Indent++;
                WriteUpdateDeclarations(writer, "Update", types);
                WriteUpdateDeclarations(writer, "Updates", types);
                WriteUpdateDeclarations(writer, "User", types);
                WriteUpdateDeclarations(writer, "Chat", types);
                writer.Indent--;
                writer.Write("}\n");
            }
        }

        private static void WriteUpdateDeclarations(IndentedTextWriter writer, string type, IReadOnlyDictionary<string, HashSet<Constructor>> types)
        {
            foreach (var updateConstructors in types[type])
            {
                writer.Write($"'{updateConstructors.predicate}': {type}.{updateConstructors.predicate};\n");
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

        private static string UnwrapVector(string type)
        {
            var vectorMatch = Regex.Match(type, "Vector<(.+)>");
            return vectorMatch.Success ? vectorMatch.Groups[1].Value : type;
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
