using LA_1305feedback.Models;
using LA_1305feedback.Services;

namespace LA_1305feedback
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.Configure<MongoDBSettings>(builder.Configuration.GetSection("MongoDB"));
            builder.Services.AddSingleton<MongoDBService>();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Configure CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
            builder => builder
            .AllowAnyOrigin()           // Erlaubt alle Ursprünge
            .AllowAnyMethod()           // Erlaubt alle HTTP-Methoden (GET, POST, etc.)
            .AllowAnyHeader());          // Erlaubt alle Header in der Anfrage
            
            });
            // Add services to the container.
            builder.Services.AddControllers();

            var app = builder.Build();


            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            // Use CORS
            app.UseCors("AllowAllOrigins"); 

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
