using System.Web;
using System.Web.Optimization;

namespace ProductManagement
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery/dist/jquery.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular/angular.js",
                "~/Scripts/angular-route/angular-route.js",
                "~/Scripts/angular-sanitize/angular-sanitize.js",
                "~/Scripts/angular-rateit/dist/ng-rateit.js",
                "~/Scripts/ngToast/dist/ngToast.js",
                "~/Scripts/ng-file-upload/ng-file-upload-all.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/app/product-ts/product.module.js",
                "~/app/product-ts/product.route.js",
                "~/app/product-ts/product.service.js", 
                "~/app/product-ts/product.controller.js",
                "~/app/product/searchProduct.js",
                "~/app/app.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap/dist/js/bootstrap.js",
                      "~/Scripts/respond/dest/respond.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Scripts/bootstrap/dist/css/bootstrap.css",
                      "~/Content/site.css",
                      "~/Scripts/angular-rateit/dist/ng-rateit.css",
                      "~/Scripts/ngToast/dist/ngToast.css"));
        }
    }
}
