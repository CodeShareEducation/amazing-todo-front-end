(function() {
  'use strict';

  angular.module('app')
    .controller('HomeController', homeController);

  homeController.$inject = ['$auth', '$mdToast'];

  function homeController($auth, $mdToast) {
    var vm = this;
    vm.name = 'Wendell';
    vm.response = null;
    vm.authenticate = authenticate;

    function authenticate(provider) {
      $auth.authenticate(provider)
        .then(function(response) {
          vm.response = response;
          console.log(vm.response);
          $mdToast.show(
            $mdToast.simple()
              .textContent('Login realizado com sucesso!')
          );
        })
        .catch(function(response) {
          $mdToast.show(
            $mdToast.simple()
              .textContent('Algo deu errado!')
          );
        });
    }
  }
})();
