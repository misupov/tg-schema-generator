using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace TelegramSchema
{
    internal static class Utils
    { 
        public static bool IsPrimitiveType(string type)
        {
            return type switch
            {
                "int" => true,
                "int128" => true,
                "int256" => true,
                "long" => true,
                "double" => true,
                "bytes" => true,
                "string" => true,
                "Bool" => true,
                "True" => true,
                "False" => true,
                "Null" => true,
                "Vector t" => true,
                _ => false
            };
        }

        public static bool IsOptional(string type)
        {
            return type.StartsWith("flags.");
        }

        public static bool IsVector(string type)
        {
            return Regex.IsMatch(type, "[Vv]ector<(.+)>");
        }

        public static string UnwrapVector(string type)
        {
            var vectorMatch = Regex.Match(type, "[Vv]ector<(.+)>");
            return vectorMatch.Success ? vectorMatch.Groups[1].Value : type;
        }

        public static string FixTypeName(string type)
        {
            if (type.StartsWith('%'))
            {
                type = type.Substring(1);
            }
            
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
                "bytes" => "ArrayBuffer",
                "!X" => "any",
                "X" => "any",
                _ => (char.ToUpper(type[0]) + type.Substring(1)).Replace(".", "")
            };
        }
        
        public static string FixConstructorName(string type)
        {
            var sb = new StringBuilder(type);
            for (var i = 0; i < sb.Length - 1; i++)
            {
                if (sb[i] == '.') sb[i + 1] = char.ToUpper(sb[i + 1]);
            }
            return sb.Replace(".", "").ToString();
        }

        public static string FixMethodName(string type)
        {
            var sb = new StringBuilder(type);
            sb[0] = char.ToUpper(sb[0]);
            for (var i = 0; i < sb.Length - 1; i++)
            {
                if (sb[i] == '.') sb[i + 1] = char.ToUpper(sb[i + 1]);
            }
            return sb.Replace(".", "").ToString();
        }

        public static bool IsType(IReadOnlyDictionary<string, HashSet<Constructor>> types, string type)
        {
            return types.ContainsKey(type);
        }
        
        public static string FormatType(IReadOnlyDictionary<string, HashSet<Constructor>> types, string type, Constructor[] constructors)
        {
            var vector2Match = Regex.Match(type, "[Vv]ector<(.+)>");
            if (vector2Match.Success)
            {
                var vectorType = UnwrapVector(type);
                if (vectorType.StartsWith('%') || IsType(types, vectorType) || IsPrimitiveType((vectorType)))
                {
                    return FixTypeName(vectorType) + "[]";
                }

                return constructors.First(c => c.predicate == vectorType).type + "." + FixConstructorName(vectorType) + "[]";
            }

            var flagsMatch = Regex.Match(type, @"flags.(\d+)\?(.+)");
            if (flagsMatch.Success)
            {
                return FixTypeName(flagsMatch.Groups[2].Value);
            }

            return FixTypeName(type);
        }

    }
}