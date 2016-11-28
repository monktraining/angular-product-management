using ProductManagement.Models;

namespace ProductManagement.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ProductManagement.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ProductManagement.Models.ApplicationDbContext context)
        {
            context.Products.AddOrUpdate(p => p.Name, new[]
            {
                new Product() {Name = "Xbox One",Price = 300.00f,Ratings = 4, ImageUrl = "/Content/images/xboxone.jpg"},
                new Product() {Name = "Xbox 360",Price = 100.00f,Ratings = 3, ImageUrl = "/Content/images/xbox360.jpg"},
                new Product() {Name = "Xbox",Price = 20.00f,Ratings = 1, ImageUrl = "/Content/images/Xbox.jpg"},
                new Product() {Name = "Playstation 2",Price = 30.00f,Ratings = 5, ImageUrl = "/Content/images/Playstation2.jpg"},
                new Product() {Name = "Playstation 3",Price = 150.00f,Ratings = 4,ImageUrl = "/Content/images/Playstation3.jpg"},
                new Product() {Name = "Playstation Pro",Price = 400.00f,Ratings = 4,ImageUrl = "/Content/images/Playstation4Pro.jpg"}
            });
            context.SaveChanges();
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
