namespace TelegramSchema
{
    class Method: IEntity
    {
        public string id { get; set; }
        public string method { get; set; }
        public Parameter[] @params { get; set; }
        public string type { get; set; }
    }
}