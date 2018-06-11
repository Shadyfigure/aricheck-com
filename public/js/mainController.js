(function () {
    angular.module('aricheck-com', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:    '/templates/home.html',
                controller:     'home-ctrl'
            })
            .when('/about',{
                templateUrl:    '/templates/about.html',
                controller:     '/js/controllers/aboutController.js'
            });
    });
})