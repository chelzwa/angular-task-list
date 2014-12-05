'use strict';

angular.module('code')
  .controller('MainCtrl', function ($scope) {
    $scope.tasks = [];

    $scope.addTask = function(){
      var newTask = {
        'name': $scope.tName,
        'description': $scope.tDescription,
        'completed': false
      };
      $scope.tasks.push(newTask);
    }

    $scope.taskClicked = function(task){
      console.log("the " + task.name + " was clicked!");
    }
  });
