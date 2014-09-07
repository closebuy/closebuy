angular.module('settings', ['settings.services'])

.controller('SettingsController', function($scope, Settings, Auth) {
  $scope.logoutUser = function() {
    Auth.logoutUser();
  };
});