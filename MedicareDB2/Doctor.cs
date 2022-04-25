using System;
using System.Collections.Generic;

#nullable disable

namespace MedicareDB2
{
    public partial class Doctor
    {
        public int Id { get; set; }
        public string Doctorname { get; set; }
        public string Speciality { get; set; }
        public string ImagePath { get; set; }
    }
}
