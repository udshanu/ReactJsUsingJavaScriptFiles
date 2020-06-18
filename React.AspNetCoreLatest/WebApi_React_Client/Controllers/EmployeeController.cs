using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi_React_Client.Models;

namespace WebApi_React_Client.Controllers
{

    //(CORS) Cross-Origin resource sharing

    [EnableCors("*", "*", "*")]
    public class EmployeeController : ApiController
    {
        public List<Employee> GetAll()
        {
            List<Employee> empList = new List<Employee>
            {
                new Employee{ Id= 101, Name= "Roshan", Location= "Kurunegala", Salary= 15000 },
                new Employee{ Id= 102, Name= "Manoj", Location= "Thanthirigama", Salary= 25000 },
                new Employee{ Id= 103, Name= "Gunarathna", Location= "Makulwewa", Salary= 35000 },
                new Employee{ Id= 104, Name= "Udara", Location= "Wewahamanduwa", Salary= 45000 },
                new Employee{ Id= 105, Name= "Sandeepani", Location= "Matara", Salary= 55000 }
            };

            return empList;
        }
    }
}
