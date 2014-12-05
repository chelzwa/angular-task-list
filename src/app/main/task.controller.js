'use strict';

angular.module('code')
.controller('TaskCtrl', function ($scope, taskList, $stateParams) {
    
  $scope.taskToDisplay = function(){
    return taskList.getTask($stateParams.id);
  };
});
