angular.module('code').service('taskData', function(){
	this.tasks = [];
  this.counter = 0;

	this.addTask = function(name, description) {
    var newTask = {
        'name': name,
        'description': description,
        'id': this.counter
    };
    this.counter++;
    this.tasks.push(newTask);
    return newTask;
  };

  this.getTask = function(id){
    var taskClicked;
    this.tasks.forEach(function(task){
      if(task.id == id){
        taskClicked = task;
      }
    });
    return taskClicked;
  };

  this.deleteTask = function(taskToDelete){
    var taskList = this.tasks;
    this.tasks.forEach(function(task, index){
      if(task.id == taskToDelete.id){
        taskList.splice(index, 1);
      }
    });
  };

  this.addTestTasks = function(numTasks){
    for(var i = 0; i < numTasks; i++){
      var taskName = "task" + i;
      var taskDesc = "description" + i;
      this.addTask(taskName, taskDesc);
    }
  }
  this.addTestTasks(10); 
  //uncomment above line to start with tasks for manual testing purposes. 
  //WARNING: This will cause gulp test to fail for 'it should start with 5
  //tasks' in task.data.spec.js: "Expected 15 to be 5."
});