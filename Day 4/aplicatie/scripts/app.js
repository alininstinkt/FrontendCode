var hrApp = angular.module('hrApp',['ngRoute']);



hrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/numbers', {
                redirectTo: '/math'
            })
            .when('/math',{
                templateUrl: 'views/demo/math.html',
                controller: 'MathController'
            })
            .when('/demoRequest', {
                templateUrl: 'views/demo/request.html',
                controller: 'RequestController'
            })
            .when('/colors', {
                templateUrl: views /colors.html',
                controller: 'ColorsController'
            })
            .when('/forms', {
                templateUrl: views /form.html',
                controller: 'FormsController'
    })

        otherwise({
            templateUrl:'views/main.html',
            controller: 'MainController'
        });
    }]);
