/// <reference path="../../typings/index.d.ts" />
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package

module Product {
    "use strict";

    interface IProductScope extends angular.IScope {
        products: Array<Product>;
        product: Product;
        filteredProducts: Array<Product>;
    }

    interface IProductController {
        get: () => void;
    }

    class ProductController implements IProductController {        

        constructor(private $scope: IProductScope, private productService: IProductService) {
            this.get();
            this.$scope.$on("searchValue",(eventName:ng.IAngularEvent, args:any) => {
                    this.$scope.filteredProducts = [];
                    var value = args.searchData;
                    for (var product in this.$scope.products) {
                        if (this.$scope.products[product].Name.indexOf(value) > -1)
                            this.$scope.filteredProducts.push(this.$scope.products[product]);
                    }
                });
        }

        get() {
            this.productService.get().then((d: angular.IHttpPromiseCallbackArg<Product[]>) => {
                this.$scope.products = d.data;
            });
        }
    }

    angular.module("product").controller("productController", ["$scope", "productService", ($scope: IProductScope, productService: IProductService) => new ProductController($scope, productService)]);
}