angular.module('closebuy.login.services', [])

.factory('Auth', function($http, $ionicPopup) {
  var loginUser = function(user) {
    $ionicPopup.alert({
      title: "LOGIN"
    });
    console.log("LOGIN", user)
  };

  var signupUser = function(user) {
    $ionicPopup.alert({
      title: "SIGN UP"
    });
    console.log("SIGN UP", user)
  }

  var logoutUser = function() {
    
  };

  return {
    loginUser: loginUser,
    signupUser: signupUser,
    logoutUser: logoutUser
  };
});


