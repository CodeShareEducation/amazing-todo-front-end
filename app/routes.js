(function() {
  'use strict';

  angular.module('app')
    .config(routesConfig);

  routesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url : '/',
        templateUrl : 'app/home/home.html',
        controller : 'HomeController',
        controllerAs : 'vm'
      });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }
})();
