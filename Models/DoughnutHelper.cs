using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace doughnut_decision_helper.Models
{
    public class DoughnutHelper
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("PlayerName")]
        public string playerName { get; set; } = null!;

        [BsonElement("Decisions")]
        public List<Game> decisions { get; set; } = new List<Game>();
    }
}
