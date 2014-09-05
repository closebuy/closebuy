angular.module('geo.Services', [])

.factory('GeoData', ['$q', function($q){

  var getData = function() {
    // this function uses promises, similar to the camera factory
    
    var q = $q.defer();
    
    console.log("q: ", q);
    
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