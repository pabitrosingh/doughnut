using System;
using MongoDB.Driver;
using MongoDB.Bson;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;

namespace doughnut_decision_helper.Models
{
    public class MongoDBService
    {
        private readonly IMongoCollection<DoughnutHelper> mongoCollection;
        public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            MongoClient mongoClient = new MongoClient(mongoDBSettings.Value.ConnectionString);
            IMongoDatabase mongoDatabase = mongoClient.GetDatabase(mongoDBSettings.Value.DatabaseName);
            mongoCollection = mongoDatabase.GetCollection<DoughnutHelper>(mongoDBSettings.Value.CollectionName);
        }

        public async Task CreateAsync(DoughnutHelperDto doughnutHelper)
        {
            DoughnutHelper doughnut = new DoughnutHelper();
            doughnut.playerName = doughnutHelper.playerName;
            doughnut.decisions = doughnutHelper.decisions;
            await mongoCollection.InsertOneAsync(doughnut);
        }

    }
}

