'use strict';

angular.module('code', ['ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('taskPage', {
        url: '/task',
        templateUrl: 'app/main/task.html',
        controller: 'TaskCtrl'
      });


    $urlRouterProvider.otherwise('/');
  })
;
