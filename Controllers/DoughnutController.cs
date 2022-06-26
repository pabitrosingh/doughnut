using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using doughnut_decision_helper.Models;

namespace doughnut_decision_helper.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DoughnutController : ControllerBase
    {
        private readonly MongoDBService _mongoDBService;
        private readonly ILogger<DoughnutController> _logger;
        public DoughnutController(ILogger<DoughnutController> logger, MongoDBService mongoDBService)
        {
            _logger = logger;
            _mongoDBService = mongoDBService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] DoughnutHelperDto helper) {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _mongoDBService.CreateAsync(helper);
            return Ok(helper); 
        }
    }

    
}
