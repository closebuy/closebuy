angular.module('login', ['login.services'])

.controller('LoginController', function($scope, Auth) {
  $scope.existingUser = {};

  $scope.newUser = {};

  $scope.loginUser = function() {
    Auth.loginUser($scope.existingUser);
  };

  $scope.signupUser = function() {
    Auth.signupUser($scope.newUser);
  }

  $scope.logoutUser = function() {
    Auth.logoutUser();
  };
});
