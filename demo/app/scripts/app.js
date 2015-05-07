angular.module('angular heroku demo', [
  
  'ui.router',
  
  'ngCookies',
  'ngAnimate',
  'angular heroku demo.templates',
  'angular heroku demo.config',
  'angular heroku demo.foo'
])
.config(function ($locationProvider, $httpProvider) {

}) 
.run(function($timeout, $rootScope, $location){
  alert('Your angular app is initialized.  Happy hacking!')
})

