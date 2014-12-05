'use strict';

angular.module('code')
  .controller('MainCtrl', function ($scope, taskList, $stateParams) {
    $scope.taskList = taskList;
  });
