<<<<<<< HEAD
angular.module('sellbuy', ['sellbuy.services'])

.controller('SellbuyController', function($scope, $state) {
  // If user selects 'sell', direct them to the camera splash
  $scope.goToCamera = function() {
    $state.go('tab.camera');
  };
  
  // If user selects 'buy', direct them to the 'buy' state/pages
  $scope.goToBuy = function() {
    console.log("WILL GO TO BUY PAGES");
    //$state.go();
  };
=======
>>>>>>> 9976ab40ec7032767b45f04c2f8162a318d9e198
});

