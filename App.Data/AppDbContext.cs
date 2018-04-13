namespace App.Data
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Data.Entity.Infrastructure;
    using App.Data.Interface;
    using App.Core.Models;

    public partial class AppDbContext : DbContext, IDataContext
    {
        public AppDbContext()
            : base("name=AppDbContext")
        {
        }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }

        public DbSet<User> users { get; set; }

        public IDbSet<T> DbSet<T>() where T : class
        {
            return this.Set<T>();
        }

        public DbEntityEntry<T> EntryGet<T>(T entity) where T : class
        {
            return this.Entry<T>(entity);
        }

        public virtual int Commit()
        {
            try
            {
                return this.SaveChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
    }
}
