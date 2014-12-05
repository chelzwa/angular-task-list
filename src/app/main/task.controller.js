'use strict';

angular.module('code')
  .controller('TaskCtrl', function ($scope, taskList) {
    $scope.taskList = taskList;
  });
