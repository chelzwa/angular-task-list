'use strict';

angular.module('code').controller('MainCtrl', [
	'$scope', 
	'taskList', 
function ($scope, taskList) {
    $scope.taskList = taskList;
}]);
