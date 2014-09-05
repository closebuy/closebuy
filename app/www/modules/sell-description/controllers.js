angular.module('sell', ['sell.Services'])

.controller('SellController', ['$scope', 'SaleItem', '$state', function($scope, SaleItem, $state) {
  // scope.item is set to the value of the SaleItem factory to preserve the sale item data between views
  $scope.item =  SaleItem;

  // for testing, the item.imgUrl is set to the SaleItem.imgUrl (hardcoded)
  $scope.item.imgUrl = SaleItem.imgUrl;

  $scope.retake = function(){
    alert("This should allow you to re-take the picture");
  };

  $scope.sell = function(item, callback){
    SaleItem = item;
    alert("This button should send the item info to the Parse database, then go to the confirmation page");
    $state.go('tab.sell-confirmation');
  };

  // transitions to the Sale Confirmation page
  $scope.go = function(){
    console.log("$scope.item from go: ", $scope.item);
  };

}]);

