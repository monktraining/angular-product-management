
'use strict';

var productService = (function () {

    function productService($http,$resource) {
        this.$http = $http;
        this.$resource = $resource;
    };

    productService.prototype.get = function () {        
        return this.$http.get("/api/products");
    };

    productService.prototype.getById = function (id) {
        return this.$http.get("/api/products/{id}", { "id": id });
    }

    productService.prototype.save = function (product) {
        return this.$http.post("api/products", product);
    }

    productService.prototype.update = function (id, product) {
        return this.$http.put("api/products/{id}", product);
    }

    productService.prototype.delete = function (id) {
        return this.$http.post("api/products/{id}", { "id": id });
    }

    return productService;
})();

angular
    .module('product')
    .service('productService', ["$http","$resource", function ($http,$resource) {
        return new productService($http,$resource);
    }]);
