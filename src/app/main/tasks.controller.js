'use strict';

angular.module('code').controller('TasksCtrl', [
	'$scope', 
	'taskData',
function ($scope, taskData) {
	var tasks = this;

    tasks.taskData = taskData;
}]);
