'use strict';

describe('Details', function(){
  var scope;
  var stateParams;

  beforeEach(module('code'));

  beforeEach(angular.mock.inject(function($rootScope, $controller, $stateParams){
    scope = $rootScope.$new();
    $controller('Details as details', {$scope: scope});
    stateParams = $stateParams;
    stateParams.id = 1;
  }));

  it('should have a defined scope as a child on the root scope', function(){
    expect(scope.details).not.toBeUndefined();
  });
  
  it('should know which task was clicked on', function(){
    expect(stateParams.id).not.toBeUndefined();
    expect(stateParams.id).toBe(1);
  });
});