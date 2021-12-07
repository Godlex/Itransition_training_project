using Microsoft.EntityFrameworkCore;
using Qoality_of_Life_changer.Model.Edentity;


namespace Quality_of_Life_changer.DAL
{
    public class QolcDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public QolcDbContext() : base()
        {

        }
        public QolcDbContext(DbContextOptions<QolcDbContext> options) : base(options)
        {

        }
    }
}
