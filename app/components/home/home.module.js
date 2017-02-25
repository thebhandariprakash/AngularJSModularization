/**
 * Created by bhprakash on 2/25/17.
 */
angular.module('myApp.homeModule',['ngRoute'])
    .controller('homeController',function($scope) {

        $scope.message="Welcome to home page"

    });