angular.module('sell.Description', ['sell.services'])

.controller('SellController', ['$scope', 'SaleItem', '$state', function($scope, SaleItem, $state) {
  $scope.item =  SaleItem;
  $scope.item.imgUrl = SaleItem.imgUrl;

  $scope.retake = function(){
    alert("This should allow you to re-take the picture");
  };

  $scope.sell = function(item, callback){
    SaleItem = item;
    $state.go('tab.sell-confirmation');
  };

   


  $scope.go = function(){
    console.log("$scope.item from go: ", $scope.item);
      // transition to confirmation page
  };

}]);

