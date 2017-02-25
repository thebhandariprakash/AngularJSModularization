/**
 * Created by bhprakash on 2/23/17.
 */

var myApp = angular.module('myModule',["ngRoute"]);

var apiUrl="http://localhost:8000/api/v1";


myApp.filter('gender',function(){
    return function(gender){
        switch(gender){
            case 1:
                return "Male"
            case 2:
                return "Female"
            default:
                return "Undefined"
        }
    }
})


var routs = myApp.config(function ($routeProvider,$locationProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "home.html",
            controller:'homeController'
    }).when('/home',{
        templateUrl:'home.html',
        controller:'homeController'
    }).when('/about',{
        templateUrl:'about.html',
        controller:'aboutController'
    }).when('/contact',{
        templateUrl:'contact.html',
        controller:'contactController'
    })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

})

routs.controller('homeController',function($scope, $http){
    var employee = [
        {name:"Prakash",age:28,gender:1,salary:20000},
        {name:"Pradeep",age:29,gender:1,salary:22000},
        {name:"Anupum",age:27,gender:1,salary:21000},
        {name:"Alisha",age:26,gender:2,salary:30000},
    ]

    $scope.employees=employee;
    $scope.sortColumn = 'name';
    $scope.reverseSort=false;

    $scope.sortData=function(column){
        $scope.reverseSort = ($scope.sortColumn==column)?!$scope.reverseSort:false;
        $scope.sortColumn = column;
    }

    $scope.getClass = function(column) {

        if($scope.sortColumn==column)
        {
            return $scope.reverseSort?"arrow-down":"arrow-up";
        }
        return "";
    }

    /// remove data
    $scope.remove = function($index,id){
        $http({
            method:'DELETE',
            params:{'id':id},
            url:apiUrl+'/post/'+id
        }).then(function(response) {
            $scope.posts.splice($index,1)
            alert("Deleted success" + id);
        }, function(response) {
            //console.log(response.error)
            alert('Error while adding data.')
        });

    }

    //add data
    $scope.add = function() {
        $http({
            method:'POST',
            params:{'title':$scope.title,'post':$scope.description,'author_id':1},
            url:apiUrl+'/post'
        }).then(function(response) {
            $scope.posts.push(response.data);
            alert("Record added successfully");
        }, function(response) {
            //console.log(response.error)
            alert('Error while adding data.')
        });
    }


    //get data
    $http({
        method:'GET',
        url:apiUrl+'/post'
        }).then(function(res){
        $scope.posts = res.data;
    },function(reason){
        $scope.error=reason.data;

    })
});


routs.controller('contactController',function($scope){

})

routs.controller('aboutController',function($scope){

})