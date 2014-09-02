angular.module('closebuy.login.services', [])

.factory('Login', function($http) {
  var loginUser = function() {
    //
  };

  var logoutUser = function() {
    FB.logout(function(response) {
      console.log("HERE?")
    });
  };

  return {
    logoutUser: logoutUser
  };
});


