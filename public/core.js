//core.js
var myapp = angular.module('myapp',[]);

function mainController ($scope, $http) {
	$scope.todos = [];
	$http.get('/api/all')
        .success(function(data) {
            $scope.todos= data.data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}