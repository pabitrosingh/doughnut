using System;
namespace doughnut_decision_helper.Models
{
    public class MongoDBSettings
    {
        public MongoDBSettings()
        {
        }
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string CollectionName { get; set; } = null!;
    }
}

