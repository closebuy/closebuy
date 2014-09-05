angular.module('geo', ['geo.Services'])

.controller('GeoController', ['$scope', 'GeoData', function($scope, GeoData){
  
  $scope.locationData = {};
  
  $scope.geoData = function(){
    GeoData.getData().then(function(position){
      $scope.locationData.latitude = position.coords.latitude;
      $scope.locationData.longitude = position.coords.longitude;
      // $scope.locationData.altitude =position.coords.altitude;
      // $scope.locationData.accuracy = position.coords.accuracy;
      // $scope.locationData.altitudeAccuracy = position.coords.altitudeAccuracy;
      // $scope.locationData.heading = position.coords.heading;
      // $scope.locationData.speed = position.coords.speed;
      $scope.locationData.timestamp = position.timestamp;

    }, function(err) {
      console.log(err);
    });
  
  };



}]);

