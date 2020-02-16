namespace TelegramSchema
{
    class Method
    {
        public string id { get; set; }
        public string method { get; set; }
        public Parameter[] @params { get; set; }
        public string type { get; set; }
    }
}