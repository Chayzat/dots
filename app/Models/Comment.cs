using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;

namespace app.Models
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string CommentText { get; set; }
        public string CommentColor { get; set; }
        public int DotId {get; set;}
        public Dot Dot {get; set;}
    }
}