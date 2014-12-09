'use strict';

angular.module('code').controller('Details', [
	'$scope',
	'taskData',
	'$stateParams',
function ($scope, taskData, $stateParams) {
  var details = this;
  details.data = taskData.getTask($stateParams.id);

  details.deleteTask = function(){
  	taskData.deleteTask(details.data);
  };
}]);
