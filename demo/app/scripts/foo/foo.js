angular.module('angular heroku demo.foo', [

])
.config(function ($locationProvider, $httpProvider) {

})

.controller('Angular heroku demoController', function($scope) {
  $scope.foo;
  $scope.fooBar = function(){
    $scope.foo = 'bar';
  }
})  