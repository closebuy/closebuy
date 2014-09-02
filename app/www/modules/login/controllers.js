angular.module('closebuy.login.controllers', [])

.controller('loginController', function($scope, Login) {
  $scope.loginUser = function() {
    Login.loginUser();
  };
});