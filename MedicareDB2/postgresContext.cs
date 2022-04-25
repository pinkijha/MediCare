using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace MedicareDB2
{
    public partial class postgresContext : DbContext
    {
        public postgresContext()
        {
        }

        public postgresContext(DbContextOptions<postgresContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bookappointment> Bookappointments { get; set; }
        public virtual DbSet<Doctor> Doctors { get; set; }
        public virtual DbSet<Service> Services { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("host=localhost;database=postgres;user id=postgres;password=root;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasPostgresExtension("adminpack")
                .HasAnnotation("Relational:Collation", "English_United States.1252");

            modelBuilder.Entity<Bookappointment>(entity =>
            {
                entity.ToTable("bookappointment");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Date)
                    .HasMaxLength(50)
                    .HasColumnName("date");

                entity.Property(e => e.Doctorname)
                    .HasMaxLength(100)
                    .HasColumnName("doctorname");

                entity.Property(e => e.email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.Number).HasColumnName("number");

                entity.Property(e => e.Time)
                    .HasMaxLength(50)
                    .HasColumnName("time");
            });

            modelBuilder.Entity<Doctor>(entity =>
            {
                entity.ToTable("doctors");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Doctorname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("doctorname");

                entity.Property(e => e.ImagePath)
                    .HasMaxLength(100)
                    .HasColumnName("image_path");

                entity.Property(e => e.Speciality)
                    .IsRequired()
                    .HasMaxLength(1000)
                    .HasColumnName("speciality");
            });

            modelBuilder.Entity<Service>(entity =>
            {
                entity.ToTable("services");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(1000)
                    .HasColumnName("description");

                entity.Property(e => e.Icon)
                    .HasMaxLength(100)
                    .HasColumnName("icon");

                entity.Property(e => e.Servicename)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("servicename");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
