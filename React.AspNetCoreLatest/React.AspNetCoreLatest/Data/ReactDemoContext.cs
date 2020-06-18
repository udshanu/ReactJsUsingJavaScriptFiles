using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.AspNetCoreLatest.Data
{
    public class ReactDemoContext : DbContext
    {
        public ReactDemoContext(DbContextOptions<ReactDemoContext> options) : base(options)
        {

        }

        public DbSet<Employees> Employees { get; set; }
    }
}
