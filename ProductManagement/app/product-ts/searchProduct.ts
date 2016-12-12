// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    interface IsearchProduct extends angular.IDirective {
    }

    interface IsearchProductScope extends angular.IScope {
    }

    interface IsearchProductAttributes extends angular.IAttributes {
    }

    class searchProduct implements IsearchProduct {
        public restrict: string;
        public templateUrl: string;
        constructor(private $document: ng.IDocumentService, private $window: ng.IWindowService) {
            this.restrict = "EA";
            this.templateUrl = "/app/product/search.html";

        }

        link(scope: IsearchProductScope, element: angular.IAugmentedJQuery, attrs: IsearchProductAttributes) {
            angular.element("#txtSearch")
                .on("keypress", () => {
                    var val = angular.element("#txtSearch").val();
                    scope.$emit("searchValue", { searchData: val });
                    scope.$apply();
                });
        }
    }

    angular.module("product").directive("searchProduct", ['$document', '$window', ($document: ng.IDocumentService, $window: ng.IWindowService) => {
        return new searchProduct($document, $window);
    }]);
}