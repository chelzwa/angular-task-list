'use strict';

describe('TasksCtrl', function() {
   var $httpBackend, $rootScope, createController, authRequestHandler, tasksCtrl;

   beforeEach(module('code'));

   beforeEach(inject(function($injector) {
     $httpBackend = $injector.get('$httpBackend');
     $rootScope = $injector.get('$rootScope');
     var $controller = $injector.get('$controller');
     tasksCtrl = $controller('TasksCtrl', {'$scope' : $rootScope });
   }));

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

   it('should receive a POST request and a GET request when fetch is called', function() {
     $rootScope.fetch();
     $httpBackend.expect('POST', 'http://requestb.in/1h2oe8j1').respond(201, '');
     $httpBackend.expect('GET', 'http://requestb.in/1h2oe8j1').respond(201, '');
     $httpBackend.flush();
   });
});