using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace LA_1305feedback.Models
{
    public class Kundenfeedback
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string name { get; set; } = null!;

        public string email { get; set; } = null!;  

        public string message { get; set; } = null!; 
    }
}
