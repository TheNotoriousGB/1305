using LA_1305feedback.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;


namespace LA_1305feedback.Services


{
    public class MongoDBService
    {
        private readonly IMongoCollection<Kundenfeedback> _kundenfeedbackCollection;
       
        public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings) 
        {
            MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _kundenfeedbackCollection = database.GetCollection<Kundenfeedback>(mongoDBSettings.Value.DatabaseName);
        }

        public async Task CreateAsync(Kundenfeedback kundenfeedback)
        {
            await _kundenfeedbackCollection.InsertOneAsync(kundenfeedback);
            return;
        }

        public async Task<List<Kundenfeedback>> GetKundenfeedbacksAsync()
        {
            return await _kundenfeedbackCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task DeleteAsync(string id)
        {
            FilterDefinition<Kundenfeedback> filter = Builders<Kundenfeedback>.Filter.Eq("Id", id);
            await _kundenfeedbackCollection.DeleteOneAsync(filter);
            return;
        }
       
    }
}
