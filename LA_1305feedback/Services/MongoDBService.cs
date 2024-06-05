using LA_1305feedback.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;


namespace LA_1305feedback.Services


{
    public class MongoDBService
    {
        private readonly IMongoCollection<> _playlistCollection;
    }
}
