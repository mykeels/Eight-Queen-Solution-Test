var app = angular.module("EightQueensApp", []);;

document.addEventListener("general-scripts-loaded", function () {
    app = angular.module("WakanowPayment", ['objectTable', 'angular-json-tree', 'ajs.RecursiveDirectiveHelper']);
});

/*app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'http://www.refsnesdata.no/**'
    ]);
});*/