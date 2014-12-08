'use strict';

angular.module('code').controller('TasksCtrl', [
	'$scope', 
	'taskData',
	'$templateCache',
	'$http',
function ($scope, taskData, $templateCache, $http) {
	var tasks = this;
    tasks.taskData = taskData;

    $scope.fetch = function(){
      $scope.code = null;
      $scope.response = null;
      $scope.method = 'GET';
      $scope.url = 'http://requestb.in/1h2oe8j1';

      $http({method: 'POST', url: $scope.url, data: 'hello world!', 
      	headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .success(function(data, status) {
          console.log("succeeded");
        })
        .error(function(data, status) {
          console.log("failed");
        });
      $http({method: $scope.method, url: $scope.url, cache: $templateCache})
        .success(function(data, status) {
          $scope.status = status;
          $scope.data = data;
        })
        .error(function(data, status) {
          $scope.data = data || "Request failed";
          $scope.status = status;
        });
    };
}]);
