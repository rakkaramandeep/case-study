
angular.module('app').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl:"app/partials/login.html",
            controller:"LoginController",
            controllerAs:"vm"
        })
        .state('home', {
            url: "/home",
            templateUrl:"app/partials/home.html"
        })
        .state('employeeList', {
            url: "/employeeList",
            templateUrl:"app/partials/employeeList.html",
            controller:"EmployeeListController",
            controllerAs:"vm"
        })
        .state('employeeDetails', {
            url: "/employeeDetails:id?edit",
            templateUrl:"app/partials/employeeDetails.html",
            controller:"EmployeeDetailsController",
            controllerAs:"vm"
        });

    $urlRouterProvider.otherwise("login");

});