'use strict';

angular.module('code')
  .controller('MainCtrl', function ($scope, taskList) {
    $scope.taskList = taskList;
  });
