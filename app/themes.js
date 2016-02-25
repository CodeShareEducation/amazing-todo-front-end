(function() {
  'use strict';

  angular.module('app')
    .config(themesConfig);

  themesConfig.$inject = ['$mdThemingProvider'];

  function themesConfig($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('deep-purple')
      .accentPalette('deep-orange')
      .warnPalette('red')
      .backgroundPalette('grey');
  }
})();
