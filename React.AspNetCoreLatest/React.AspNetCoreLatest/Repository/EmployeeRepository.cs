using React.AspNetCoreLatest.Data;
using React.AspNetCoreLatest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.AspNetCoreLatest.Repository
{
    public class EmployeeRepository
    {
        public readonly ReactDemoContext _context = null;
        public EmployeeRepository(ReactDemoContext context)
        {
            _context = context;
        }

        public List<Employees> GetAll()
        {
            var employee = _context.Employees.ToList();
            return employee;
        }

        public int SaveEmployee(EmployeeModel model)
        {
            var newEmployee = new Employees
            {
                Name = model.Name,
                Location = model.Location,
                Salary = model.Salary
            };

            _context.Employees.Add(newEmployee);
            _context.SaveChanges();

            return newEmployee.Id;
        }
    }
}
