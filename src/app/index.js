'use strict';

angular.module('code', ['ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/tasks.html',
        controller: 'TasksCtrl as tasks'
      })
      .state('details', {
        url: '/task/:id',
        templateUrl: 'app/main/task.details.html',
        controller: 'Details as details'
      });


    $urlRouterProvider.otherwise('/');
  });
