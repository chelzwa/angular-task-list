'use strict';

describe('taskData', function(){
  var scope;
  var taskData;

  beforeEach(module('code'));

  beforeEach(inject(function(_taskData_){
  	taskData = _taskData_;
  	taskData.addTestTasks(5);
  }));

  it('should be able to return a list of tasks', function(){
  	var tasks = taskData.getTasks();
  	expect(tasks).not.toBeUndefined();
  });

  it('should start with 5 tasks', function(){
  	var tasks = taskData.getTasks();
  	expect(tasks).not.toBeUndefined();
  	expect(tasks.length).toBe(5);
  });

  it('should be able to add another task', function(){
  	var taskAdded = taskData.addTask('newTaskName', 'newTaskDesc');
  	expect(taskAdded).not.toBeUndefined();
  	expect(taskAdded.name).toBe('newTaskName');
  	expect(taskAdded.description).toBe('newTaskDesc');
  });

  it('should be able to return a specific task based on unique id', function(){
  	var taskReturned = taskData.getTask(0);
  	expect(taskReturned).not.toBeUndefined();
  	expect(taskReturned.name).toBe('task0');
  	expect(taskReturned.description).toBe('description0');
  });
  
});