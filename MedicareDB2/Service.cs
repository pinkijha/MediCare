using System;
using System.Collections.Generic;

#nullable disable

namespace MedicareDB2
{
    public partial class Service
    {
        public int Id { get; set; }
        public string Servicename { get; set; }
        public string Description { get; set; }
        public string Icon { get; set; }
    }
}
