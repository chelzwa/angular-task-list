'use strict';

describe('TasksCtrl', function(){
  var scope;

  beforeEach(module('code'));

  beforeEach(angular.mock.inject(function($rootScope, $controller){
  	scope = $rootScope.$new();
    $controller('TasksCtrl as tasks', {$scope: scope});
  }));

  it('should have a defined scope as a child on the root scope', function(){
    expect(scope.tasks).not.toBeUndefined();
  });

  it('should have a pointer to the taskData service', function(){
    expect(scope.tasks.taskData).not.toBeUndefined();
  });

  it('should have an arary of tasks from taskData', function(){
    var taskList = scope.tasks.taskData.tasks;
    expect(taskList).not.toBeUndefined();
    expect(angular.isArray(taskList)).toBeTruthy();
  });
});