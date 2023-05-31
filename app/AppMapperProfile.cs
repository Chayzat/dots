using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using app.Dtos;
using app.Models;

namespace app
{
    public class AppMapperProfile:Profile
    {
        public AppMapperProfile()
        {
            CreateMap<DotDto, Dot>();
            CreateMap<CommentDto, Comment>();
        }
    }
}