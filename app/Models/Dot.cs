using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
namespace app.Models
{
    public class Dot
    {
        public int DotId { get; set; }
        public int PointX { get; set; }
        public int PointY { get; set; }
        public int Radius { get; set; }
        public string DotColor { get; set; }
        public List<Comment> Comments {get; set;}
    }
}