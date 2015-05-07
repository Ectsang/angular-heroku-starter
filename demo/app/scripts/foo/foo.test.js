// ---SPECS-------------------------

describe('angular heroku demo', function () {
  var scope,
    controller;
  
  beforeEach(function () {
    module('angular heroku demo');
  });

  describe('Angular heroku demoController', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('Angular heroku demoController', {
        '$scope': scope
      });
    }));
        
    it('sets the name', function () {
      scope.fooBar();
      expect(scope.foo).toBe('bar');
    });
  });
    
});
