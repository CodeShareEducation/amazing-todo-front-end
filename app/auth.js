(function() {
  'use strict';

  angular.module('app')
    .config(authConfig);

  authConfig.$inject = ['$authProvider'];

  function authConfig($authProvider) {
    $authProvider.tokenPrefix = 'amazing-todo';

    $authProvider.github({
      clientId: '261df4ad7bed182bc920'
    });
  }
})();
