<<<<<<< HEAD
angular.module('login.services', [])
=======
>>>>>>> 9976ab40ec7032767b45f04c2f8162a318d9e198

.factory('Auth', function($state) {
  // Login existing user in Parse database
  var loginUser = function(user) {
    Parse.User.logIn(user.username, user.password, {
      // If successful in logging user in, make them current user by giving them a session token
      success: function(user) {
        var token = Parse.User.current().getSessionToken();
        Parse.User.become(token, {
          // If successful in authorizing user with token, take them to the 'sellbuy' screen
          success: function(user) {
            $state.go('sellbuy');
          }, 
          error: function(error) {
            //
          }
        });
      },
      error: function(user) {
        //
      }
    });
  };

  var signupUser = function(user) {
    // Create new user in Parse database
    var newUser = new Parse.User();
    newUser.set("username", user.username);
    newUser.set("password", user.password);

    newUser.signUp(null, {
      // If successful in creating new user, make them current user by giving them a session token
      success: function(user) {
        var token = Parse.User.current().getSessionToken();
        Parse.User.become(token, {
          // If successful in authorizing user with token, take them to the 'sellbuy' screen
          success: function(user) {
            $state.go('sellbuy');
          }, 
          error: function(error) {
            //
          }
        });
      },
      error: function(err) {
        //
      }
    });
  }

  var logoutUser = function() {
    
  };

  return {
    loginUser: loginUser,
    signupUser: signupUser,
    logoutUser: logoutUser
  };
});


