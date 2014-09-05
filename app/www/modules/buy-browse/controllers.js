angular.module('buybrowse', ['buybrowse.services'])

.controller('BuyBrowseController', function($scope, BuyItems, $state){
  $scope.items = BuyItems.all();
  $scope.itemIndex = 0;
  $scope.currentItem = $scope.items[$scope.itemIndex];

  //when user swipes left, show them the next item
  $scope.onSwipeLeft = function(){
    console.log("swipe left");
    //mark this item as not interested
    //show the next item in the list
    $scope.itemIndex++;
    if($scope.itemIndex < $scope.items.length){
      $scope.currentItem = $scope.items[$scope.itemIndex];
    }
  };

  //when user swipes right, take them to the buy confirmation page
  $scope.onSwipeRight = function(){
    console.log("swipe right");
    $state.go('tab.buyconfirmation');
  };

  //show them the next item
  $scope.nextItem = function(){
    console.log("Not interested in buying");
    $scope.onSwipeLeft();
  };

  //take them to the buy confirmation page
  $scope.buyItem = function(){
    console.log("Interested in buying");
    $state.go('tab.buyconfirmation');
  };
});