angular.module('login', ['login.services'])

.controller('LoginController', function($scope, Auth) {
  $scope.newUser = false;

  $scope.existingUser = {};

  $scope.newUser = {};

  $scope.toggleView = function() {
    $scope.newUser = !$scope.newUser;
  };

  $scope.loginUser = function() {
    Auth.loginUser($scope.existingUser);
  };

  $scope.signupUser = function() {
    Auth.geoData($scope.newUser);
  }

  $scope.logoutUser = function() {
    Auth.logoutUser();
  };
});
