module Product {
    'use strict';

    angular.module("product").config(["$routeProvider", ($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when("/products",
            {
                templateUrl: '/app/product/index.html'
            })
            .when("/products/edit",
            {
                templateUrl: '/app/product/edit.html'
            })
            .when("/products/add",
            {
                templateUrl: '/app/product/add.html'
            });
    }])
}