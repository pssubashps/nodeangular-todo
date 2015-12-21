//core.js
var myapp = angular.module('myapp',[]);

function mainController ($scope, $http) {
	$scope.todos = [];
	getAll();
      $scope.createTodo = function() {
      	console.log($scope.name);
      	$http.post('/api/todo/create',{'name':$scope.name}) 
      		.success(function(data){
      			console.log("created");
      			getAll();
      		})
      		.error(function(errData){
      			console.log("Error While Create".errData);
      		});

      }
   function getAll()
      {
      	$http.get('/api/all')
        .success(function(data) {
            $scope.todos= data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

      }
}