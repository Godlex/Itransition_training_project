namespace Quality_of_Life_changer.Data;

using Microsoft.EntityFrameworkCore;

public class QolcDbContext : DbContext
{
    public QolcDbContext(DbContextOptions<QolcDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();
        builder.Entity<User>()
            .HasIndex(u => u.UserName)
            .IsUnique();
    }
}