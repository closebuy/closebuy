<<<<<<< HEAD
angular.module('login', ['login.services'])
=======
>>>>>>> 9976ab40ec7032767b45f04c2f8162a318d9e198

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
<<<<<<< HEAD
});
>>>>>>> 9976ab40ec7032767b45f04c2f8162a318d9e198
