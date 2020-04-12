using System;
using System.IO;
using System.Security.Cryptography;

namespace TelegramSchema
{
    public static class GeneratedFileNotice
    {
        public static void Write(TextWriter writer, string schemaName)
        {
            using var md5 = MD5.Create();
            using var stream = File.OpenRead(schemaName + ".json");
            var hash = md5.ComputeHash(stream);
            var checksum = BitConverter.ToString(hash).Replace("-", "").ToLowerInvariant();

            writer.WriteLine("/* eslint-disable @typescript-eslint/no-use-before-define */");
            writer.WriteLine("/* eslint-disable quote-props */");
            writer.WriteLine("/* eslint-disable spaced-comment */");
            writer.WriteLine("/* eslint-disable max-len */");
            writer.WriteLine("/* eslint-disable operator-linebreak */");
            writer.WriteLine("/* eslint-disable semi-style */");
            writer.WriteLine();
            writer.WriteLine("/*******************************************************************************************/");
            writer.WriteLine("/* This file was automatically generated (https://github.com/misupov/tg-schema-generator). */");
            writer.WriteLine("/*                                                                                         */");
            writer.WriteLine("/* Do not make changes to this file unless you know what you are doing -- modify           */");
            writer.WriteLine("/* the tool instead.                                                                       */");
            writer.WriteLine("/*                                                                                         */");
            writer.WriteLine("/* Source: " + $"{schemaName}.json (md5: {checksum})".PadRight(80, ' ') + "*/");
            writer.WriteLine("/* Time: " + $"{DateTime.UtcNow:U} (UTC)".PadRight(82, ' ') + "*/");
            writer.WriteLine("/*                                                                                         */");
            writer.WriteLine("/*******************************************************************************************/");
            writer.WriteLine();
        }        
    }
}