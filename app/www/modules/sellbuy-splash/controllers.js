angular.module('sellbuy', ['sellbuy.services'])

.controller('SellbuyController', function($scope, $state) {
  // If user selects 'sell', direct them to the camera splash
  $scope.goToCamera = function() {
    $state.go('tab.camera');
  };
  
  // If user selects 'buy', direct them to the 'buybrowse' state/pages
  $scope.goToBuy = function() {
    $state.go('tab.buybrowse');
  };
});
