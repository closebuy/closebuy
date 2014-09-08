angular.module('login', ['login.services'])

.controller('LoginController', function($scope, Auth) {
  $scope.newUserBox = true;

  $scope.existingUser = {};

  $scope.newUser = {};

  $scope.toggleView = function() {
    $scope.newUserBox = !$scope.newUserBox;
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
