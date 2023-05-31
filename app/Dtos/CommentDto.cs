using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app.Dtos
{
    public class CommentDto
    {
         public int CommentId { get; set; }
        public string CommentText { get; set; }
        public string CommentColor { get; set; }
        public int DotId {get; set;}
    }
}