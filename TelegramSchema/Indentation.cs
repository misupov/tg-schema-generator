using System;
using System.CodeDom.Compiler;

namespace TelegramSchema
{
    public class Indentation: IDisposable
    {
        private readonly IndentedTextWriter _writer;

        private Indentation(IndentedTextWriter writer)
        {
            this._writer = writer;
            writer.Indent++;
        }

        public void Dispose()
        {
            _writer.Indent--;
        }
        
        public static Indentation Indent(IndentedTextWriter writer) => new Indentation(writer);
    }
}