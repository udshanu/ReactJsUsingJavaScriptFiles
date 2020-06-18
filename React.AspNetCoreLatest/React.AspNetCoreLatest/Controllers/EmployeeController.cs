using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using React.AspNetCoreLatest.Data;
using React.AspNetCoreLatest.Models;
using React.AspNetCoreLatest.Repository;

namespace React.AspNetCoreLatest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly EmployeeRepository _employeeRepository = null;

        public EmployeeController(EmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        public List<Employees> GetAll()
        {
            var empList = _employeeRepository.GetAll();

            return empList;
        }

        [HttpPost]
        public bool SaveEmployee(EmployeeModel employee)
        {
            int id = _employeeRepository.SaveEmployee(employee);

            if (id > 0)
                return true;
            else
                return false;
        }
    }
}