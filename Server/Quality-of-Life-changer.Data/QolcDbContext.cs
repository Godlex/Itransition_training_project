using Microsoft.EntityFrameworkCore;
using Qoality_of_Life_changer.Model.Edentity;

namespace Quality_of_Life_changer.DAL;

public class QolcDbContext : DbContext
{
    public QolcDbContext(DbContextOptions<QolcDbContext> options) : base(options)
    {
    }

    public DbSet<QolcUser> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<QolcUser>()
            .HasIndex(u => u.Email)
            .IsUnique();
        builder.Entity<QolcUser>()
            .HasIndex(u => u.UserName)
            .IsUnique();
    }
}