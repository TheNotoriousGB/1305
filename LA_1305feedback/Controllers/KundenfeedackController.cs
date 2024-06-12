using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using LA_1305feedback.Services;
using LA_1305feedback.Models;

namespace LA_1305feedback.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KundenfeedackController : ControllerBase
    {
        private readonly MongoDBService _mongoDBService;

        public KundenfeedackController(MongoDBService mongoDBService) 
        {
            _mongoDBService = mongoDBService;
        }

        [HttpGet]
        public async Task<List<Kundenfeedback>> Get()
        {

            return await _mongoDBService.GetKundenfeedbacksAsync();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Kundenfeedback kundenfeedback)
        {
            await _mongoDBService.CreateAsync(kundenfeedback);
            return CreatedAtAction(nameof(Get), new {id = kundenfeedback.Id}, kundenfeedback);
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _mongoDBService.DeleteAsync(id);
            return NoContent();
        }
    }
}
