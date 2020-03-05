namespace TelegramSchema
{
    class Constructor
    {
        public string id { get; set; }
        public string predicate { get; set; }
        public Parameter[] @params { get; set; }
        public string type { get; set; }
        public int layer { get; set; }
    }
}