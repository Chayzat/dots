using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app.Dtos
{
    public class DotDto
    {
        public int DotId { get; set; }
        public int PointX { get; set; }
        public int PointY { get; set; }
        public int Radius { get; set; }
        public string DotColor { get; set; }
        public List<CommentDto> Comments { get; set; }
    }
}