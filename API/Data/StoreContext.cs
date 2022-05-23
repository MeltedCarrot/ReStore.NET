using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
  public class StoreContext : DbContext
  {
    public StoreContext(DbContextOptions options) : base(options)
    {

    }

    //Products -> Database table (plural)
    public DbSet<Product> Products { get; set; }
  }
}