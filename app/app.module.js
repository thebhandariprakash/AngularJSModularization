/**
 * Created by bhprakash on 2/25/17.
 */

angular.module('myApp', [
    'ngRoute',
    'myApp.postModule',
    'myApp.homeModule'
    ])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "app/components/home/index.html",
            controller: 'homeController'
        })

        .when('/home', {
        templateUrl: "app/components/home/index.html",
        controller: 'homeController'
        })

        //post routs
        .when('/post', {
        templateUrl: "app/components/post/index.html",
        controller: 'postController'
        })
        .when('/post/add', {
        templateUrl: "app/components/post/add.html",
        controller: 'postController'
    })

        .otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);

