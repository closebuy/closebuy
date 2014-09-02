angular.module('closebuy.login.controllers', [])

.controller('LoginController', function($scope, Login) {
  $scope.loginUser = function() {
    Login.loginUser();
  };

  $scope.logoutUser = function() {
    Login.logoutUser();
  }
});