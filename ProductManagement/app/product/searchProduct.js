(function () {
    'use strict';

    function searchProduct($document, $window) {
        var _this = this;
        this.$document = $document;
        this.$window = $window;
        this.restrict = 'EA';
        this.link = function (scope, element, attributes) {
            angular.element("#txtSearch")
                .on("keypress",
                    function() {
                        var val = angular.element("#txtSearch").val();
                        scope.$emit("searchValue", { searchData: val });
                        scope.$apply();
                    });
        };
        this.templateUrl = "/app/product/search.html";
    }
    angular
        .module('product')
        .directive('searchProduct', ['$document', '$window', function ($document, $window) {
            return new searchProduct($document, $window);
        }]);

})();