using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using MedicareDB2;
using MedicareDB2.Controllers;
using Microsoft.VisualStudio.TestPlatform.Utilities;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MediCareDB2Tests
{
    [TestClass]
    
    public class DoctorsControllerTests
    {
        [TestMethod]
        public void TestGetDoctors()
        {
            var streamWriter = new StreamWriter("log.txt");
            //Arrange
            var context = new postgresContext();
            var doctorAbc = context.Doctors.Where(cust => cust.Doctorname == "Bryan Saftler").FirstOrDefault();
            streamWriter.WriteLine(doctorAbc.Doctorname);
            var controller = new DoctorsController(context);



            //Act
            var doctors = controller.GetDoctors().Result.Value;
            var result = doctors.FirstOrDefault();
            Console.WriteLine(result.Doctorname + "taken from doctors table");
            //Assert
            Assert.IsNotNull(result, "No Customer data returned");
        }
    }
}
