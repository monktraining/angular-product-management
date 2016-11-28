(function () {
    'use strict';

    function productController($scope, $location, ngToast, productService) {
        var _this = this;
        this.$scope = $scope;
        this.$scope.filteredProducts = [];
        this.productService = productService;
        this.$location = $location;
        this.ngToast = ngToast;

        this.$scope.$on("searchValue",
            function(eventName, args) {
                _this.$scope.filteredProducts = [];
                var value = args.searchData;
                for (var product in _this.$scope.products) {
                    if (_this.$scope.products[product].Name.indexOf(value) > -1)
                        _this.$scope.filteredProducts.push(_this.$scope.products[product]);
                }
            });
        this.initialize();
    }
    productController.prototype.initialize = function () {
        var _this = this;
        _this.$scope.get = function () { return _this.get(); }
        _this.$scope.getById = function (id) { return _this.getById(id); }
        _this.$scope.save = function (product) { return _this.save(product); }
    };
    productController.prototype.get = function () {
        var vm = this;
        vm.productService.get()
                .then(function (d) {
                    vm.$scope.products = d.data;
                });
    };
    productController.prototype.getById = function (id) {
        var _this = this;
        _this.productService.getById(id)
            .then(function (d) {

            });
    }

    productController.prototype.save = function (product) {
        var _this = this;
        _this.productService.save(product)
            .then(function (d) {
                _this.ngToast.create({                    
                    content: 'Product added successfully',
                    timeout: 5000
                });
                _this.$scope.product = {};
            });

    }

    productController.prototype.update = function (product) {
        var _this = this;
        _this.productService.update(product)
            .then(function (d) {

            });
    }

    angular
        .module('product')
        .controller('productController', ["$scope", "$location", "ngToast", "productService", function ($scope, $location, ngToast, productService) {
            return new productController($scope, $location, ngToast, productService);
        }]);

})();