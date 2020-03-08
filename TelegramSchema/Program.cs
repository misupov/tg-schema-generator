using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace TelegramSchema
{
    internal static class Program
    {
        private static void Main(string[] args)
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

            Parsers.WriteParsers(outputFolder, schemaName, types, schema);
            Builders.WriteBuilders(outputFolder, schemaName, types, schema);
            Declarations.WriteDeclarations(outputFolder, schemaName, genRefs, typeOrder, types, schema);
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
