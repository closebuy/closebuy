angular.module('login.services', [])

.factory('Auth', function($state, GeoData) {
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

  var geoData = function(user){
    GeoData.getData().then(function(position){
      console.log("getData successful: position - ", position);
      // $scope.locationData.latitude = position.coords.latitude;
      // $scope.locationData.longitude = position.coords.longitude;
      // $scope.locationData.timestamp = position.timestamp;
      // when geodata call is successful and position is accessible, create the Parse user object
      signupUser(user, position);
    }, function(err) {
      console.log(err);
    });
  };

  var signupUser = function(user, position) {
    // Create new user in Parse database

    var point = new Parse.GeoPoint(position.coords.latitude, position.coords.longitude);

    var newUser = new Parse.User();
    newUser.set("username", user.username);
    newUser.set("password", user.password);
    newUser.set("location", point);

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
  };

  var logoutUser = function() {
    
  };

  return {
    loginUser: loginUser,
    signupUser: signupUser,
    logoutUser: logoutUser,
    geoData: geoData
  };
})

.factory('GeoData', ['$q', function($q){

  var getData = function() {
    // this function uses promises, similar to the camera factory
    
    var q = $q.defer();
    
    navigator.geolocation.getCurrentPosition(
      function(position) {
        q.resolve(position);
      },
      function(err) {
        q.reject(err);
      });
    
    return q.promise;
    
    };

  return {
    getData: getData
  };

}]);