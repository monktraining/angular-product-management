/// <reference path="../../typings/index.d.ts" />
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module Product {
    "use strict";

    export interface IProductService {
        get: () => angular.IHttpPromise<Array<Product>>;
        getById: (id: Number) => angular.IHttpPromise<Product>;
    }

    export class ProductService implements IProductService {

        constructor(private $http: angular.IHttpService) {
        }

        public get() {
            return this.$http.get<Product[]>("/api/products");
        }

        public getById(id: Number) {
            return this.$http.get<Product>("/api/products/{id}", { params: { "id": id } });
        }
    }

    angular.module("product").service("productService", ["$http", ($http) => new ProductService($http)]);
}