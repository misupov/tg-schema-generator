namespace TelegramSchema
{
    interface IEntity
    {
        string id { get; set; }
        
        Parameter[] @params { get; set; }
    }
}