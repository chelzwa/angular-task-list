'use strict';

angular.module('code').controller('TaskCtrl', [
	'$scope',
	'taskList',
	'$stateParams',
function ($scope, taskList, $stateParams) {
  $scope.taskToDisplay = taskList.getTask($stateParams.id);
}});
