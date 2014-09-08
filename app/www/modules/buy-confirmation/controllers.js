angular.module('buyconfirm', ['buybrowse.services'])

.controller('ConfirmController', ['$scope', 'BuyItems', '$state', function($scope, BuyItems, $state) {
  $scope.bought = false;
  $scope.interestedItemId = BuyItems.interestedItemId;
  $scope.confirmPurchase = function(){
    //mark the item as purchased
    BuyItems.markItemAsPurchased($scope.interestedItemId);
    //setting bought to true disables the buy button and 
    //displays a thank you message
    $scope.bought = true;
    setTimeout(function() {
      $state.go('tab.buybrowse');
    }, 2000);
  };
}]);
