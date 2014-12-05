'use strict';

angular.module('code')
.controller('TaskCtrl', function ($scope, taskList, $stateParams) {
  $scope.taskToDisplay = taskList.getTask($stateParams.id);
});
