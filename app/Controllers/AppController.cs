using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using app.Data;
using app.Dtos;
using app.Models;

namespace app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppController : ControllerBase
    {
        private readonly AppDbContext _DBContext;
        private readonly IMapper _mapper;
        public AppController(AppDbContext dbContext, IMapper mapper)
        {
            _DBContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var dots = await _DBContext.Dots.Include(_ => _.Comments).ToListAsync();
            return Ok(dots);
        }

        [HttpPost]
        public async Task<IActionResult> Post(DotDto dotPayload)
        {
            var newDot = _mapper.Map<Dot>(dotPayload);
            _DBContext.Dots.Add(newDot);
            await _DBContext.SaveChangesAsync();
            return Created($"/{newDot.DotId}", newDot);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, DotDto _dot)
        {
            var dot = await _DBContext.Dots.FindAsync(id);

            if (dot == null)
            {
                return NotFound();
            }

            _mapper.Map(_dot, dot);

            var result = _DBContext.Dots.Update(dot);

            await _DBContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("dot/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            // var dot = await _DBContext.Dots.FindAsync(id);
            var dot = await _DBContext.Dots.FirstOrDefaultAsync(o => o.DotId == id);
            if (dot == null)
            {
                return NotFound();
            }
            var result = _DBContext.Dots.Remove(dot);
            await _DBContext.SaveChangesAsync();
            return Ok();
        }
    }
}