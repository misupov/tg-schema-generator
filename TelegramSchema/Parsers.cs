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
    class Parsers
    {
        private static Dictionary<string, string> aliases = new Dictionary<string, string>();
        private static int aliasCounter = 0;

        public static void WriteParsers(
            string outputFolder,
            string schemaName,
            IReadOnlyDictionary<string, HashSet<Constructor>> types,
            Schema schema)
        {
            using var fileStream = File.Open(Path.Combine(outputFolder, $"{schemaName}.parser.ts"), FileMode.Create);
            using var streamWriter = new StreamWriter(fileStream);
            using var writer = new IndentedTextWriter(streamWriter, "  ") {NewLine = "\n"};
            
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

            foreach (var type in types)
            {
                foreach (var constructor in type.Value)
                {
                    GetConstructorAlias(constructor);
                }
            }

            writer.WriteLine("interface ByteStream {");
            writer.Indent++;
            writer.WriteLine("readInt32(): number;");
            writer.WriteLine("readUint32(): number;");
            writer.WriteLine("readInt64(): string;");
            writer.WriteLine("readInt128(): string;");
            writer.WriteLine("readInt256(): string;");
            writer.WriteLine("readDouble(): number;");
            writer.WriteLine("readString(): string;");
            writer.WriteLine("readBytes(): ArrayBuffer;");
            writer.WriteLine("revert(bytes: number): void;");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("interface Parser {");
            writer.Indent++;
            writer.WriteLine("parse(stream: ByteStream): any;");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("export default class MessageParser implements Parser {");
            writer.Indent++;
            writer.WriteLine("private _s!: ByteStream;");
            writer.WriteLine();
            writer.WriteLine("constructor(private fallbackParser?: Parser) {}");
            writer.WriteLine();
            writer.WriteLine("public parse(stream: ByteStream) {");
            writer.Indent++;
            writer.WriteLine("this._s = stream;");
            writer.WriteLine("return this.o();");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("private i32 = () => this._s.readInt32();");
            writer.WriteLine("private u32 = () => this._s.readUint32();");
            writer.WriteLine("private i64 = () => this._s.readInt64();");
            writer.WriteLine("private i128 = () => this._s.readInt128();");
            writer.WriteLine("private i256 = () => this._s.readInt256();");
            writer.WriteLine("private d = () => this._s.readDouble();");
            writer.WriteLine("private s = () => this._s.readString();");
            writer.WriteLine("private b = () => this._s.readBytes();");
            writer.WriteLine();
            writer.WriteLine("private v = (t: () => any, bare = false) => {");
            writer.Indent++;
            writer.WriteLine("if (!bare) { this.u32(); } // should always be 481674261");
            writer.WriteLine("const len = this.u32();");
            writer.WriteLine("const result = [];");
            writer.WriteLine("for (let i = 0; i < len; ++i) result.push(t());");
            writer.WriteLine("return result;");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            writer.WriteLine("private o = (): any => {");
            writer.Indent++;
            writer.WriteLine("const t = this;");
            writer.WriteLine("const c = this.u32();");
            writer.WriteLine("switch (c) {");
            writer.Indent++;
            foreach (var constructor in schema.constructors)
            {
                var constructorId = int.Parse(constructor.id);
                writer.WriteLine($"case 0x{constructorId:x}: return t.{GetConstructorAlias(constructor)}();");
            }

            writer.WriteLine("default: {");
            writer.Indent++;
            writer.WriteLine("if (this.fallbackParser) {");
            writer.Indent++;
            writer.WriteLine("this._s.revert(4);");
            writer.WriteLine("return this.fallbackParser.parse(this._s);");
            writer.Indent--;
            writer.WriteLine("} else {");
            writer.Indent++;
            writer.WriteLine("console.error(`Unknown constructor 0x${c.toString(16)}.`);");
            writer.WriteLine("return undefined;");
            writer.Indent--;
            writer.WriteLine("}");
            writer.Indent--;
            writer.WriteLine("}");
            writer.Indent--;
            writer.WriteLine("}");
            writer.Indent--;
            writer.WriteLine("}");
            writer.WriteLine();
            
            foreach (var constructor in schema.constructors)
            {
                if (constructor.predicate == "boolTrue")
                {
                    writer.WriteLine($"{GetConstructorAlias(constructor)} = () => true;");
                } 
                else if (constructor.predicate == "boolFalse")
                {
                    writer.WriteLine($"{GetConstructorAlias(constructor)} = () => false;");
                } 
                else if (constructor.@params.All(p => p.name != "flags"))
                {
                    WriteParserConstructorLambda(writer, types, constructor);
                }
                else
                {
                    WriteParserConstructor(writer, types, constructor);
                }
            }
            writer.Indent--;
            writer.WriteLine("}");
        }

        private static void WriteParserConstructorLambda(IndentedTextWriter writer, IReadOnlyDictionary<string, HashSet<Constructor>> types, Constructor constructor)
        {
            writer.Write($"{GetConstructorAlias(constructor)} = () => ({{");
            writer.Write($"_: '{constructor.predicate}'");
            foreach (var param in constructor.@params)
            {
                writer.Write($", {param.name}: {FormatAccessor(types, param.type)}");
            }
            writer.WriteLine("})");
        }

        private static void WriteParserConstructor(IndentedTextWriter writer, IReadOnlyDictionary<string, HashSet<Constructor>> types, Constructor constructor)
        {
            writer.WriteLine($"{GetConstructorAlias(constructor)}() {{");
            writer.Indent++;
            if (constructor.@params.Any(p => p.type == "#"))
            {
                writer.WriteLine("const flags = this.i32();");
            }

            writer.WriteLine("return {");
            writer.Indent++;
            writer.WriteLine("_: '" + constructor.predicate + "' as const,");
            foreach (var param in constructor.@params)
            {
                if (param.type != "#")
                {
                    writer.WriteLine($"{param.name}: {FormatAccessor(types, param.type)},");
                }
            }
            writer.Indent--;
            writer.WriteLine("}");
            writer.Indent--;
            writer.WriteLine("}");
        }

        private static string GetConstructorAlias(Constructor constructor)
        {
            const string r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
            var cName = constructor.predicate.Replace('.', '_');
            if (!aliases.TryGetValue(cName, out var alias))
            {
                var c = aliasCounter++;
                var sb = new StringBuilder();
                do
                {
                    sb.Insert(0, r[c % r.Length]);
                    c /= r.Length;
                } while (c > 0);

                aliases[cName] = sb.ToString();
            }

            return aliases[cName];
        }

        private static string FormatAccessor(IReadOnlyDictionary<string, HashSet<Constructor>> types, string paramType)
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
                case "true": return bit >= 0 ? ("!!(flags & 0x" + Convert.ToString(1 << bit, 16) + ")") : FormatAccessorMandatory(types, paramType); 
                default: return bit >= 0 
                    ? ("flags & 0x" + Convert.ToString(1 << bit, 16) + " ? " + FormatAccessorMandatory(types, paramType) + " : undefined")
                    : FormatAccessorMandatory(types, paramType); 
            }
        }
        
        private static string FormatAccessorMandatory(IReadOnlyDictionary<string, HashSet<Constructor>> types, string paramType)
        {
            if (IsVector(paramType))
            {
                var param = UnwrapVector(paramType);
                
                if (IsType(types, param))
                {
                    return $"this.v(this.o)";
                }

                if (param.StartsWith("%"))
                {
                    param = types[param.Substring(1)].First().predicate;
                    return $"this.v(this.{aliases[param]}, true)";
                }
                
                switch (param)
                {
                    case "int": return "this.v(this.i32)";
                    case "long": return "this.v(this.i64)";
                    case "int128": return "this.v(this.i128)";
                    case "int256": return "this.v(this.i256)";
                    case "double": return "this.v(this.d)";
                    case "string": return "this.v(this.s)";
                    case "bytes": return "this.v(this.b)";
                }
                return $"this.v(this.{aliases[param]})";
            }

            switch (paramType)
            {
                case "int": return "this.i32()";
                case "long": return "this.i64()";
                case "int128": return "this.i128()";
                case "int256": return "this.i256()";
                case "double": return "this.d()";
                case "string": return "this.s()";
                case "bytes": return "this.b()";
                case "vector": return "this.v()";
                default: return "this.o()"; 
            }
        }
    }
}