/**
 * Created by bhprakash on 2/25/17.
 */


angular.module('myApp.postModule',['ngRoute'])
    .controller('postController',function($scope) {
        var post = [
            {title:"Post1",comment:28},
            {title:"Post2",comment:29},
            {title:"Post3",comment:27},
            {title:"Post2",comment:26},
        ]
        $scope.posts=post;


        $scope.sortColumn = 'title';
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


        /// remove record
        $scope.remove = function($index,id){

            if(confirm("Are you sure you want to delete this record?"))
            {
                $scope.posts.splice($index,1)
            }
        }

        //add record
        $scope.add = function() {

            $scope.posts.push(response.data);
            alert("Record added successfully");
        }

    });

