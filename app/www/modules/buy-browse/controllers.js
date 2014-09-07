angular.module('buybrowse', ['buybrowse.services'])

.controller('BuyBrowseController', function($scope, BuyItems, $state, $q){
  //get
  $scope.getItems = function(){
    //a promise going to get the new items 
    var promise = BuyItems.getNewItems(); 
    //once items are back, then do the following
    promise.then(function(items){
      //set the scope.items to the items retrieved
      $scope.items = items;
      $scope.itemIndex = 0;
      //display the first item
      $scope.currentItem = $scope.items[$scope.itemIndex];
    }, function(err){
      console.log("error retrieving items");
    });  
  };

  //when user swipes left, show them the next item
  $scope.onSwipeLeft = function(){
    //mark this item as skipped
    BuyItems.markItemAsSkipped($scope.currentItem.imageId);
    //show the next item in the list
    $scope.itemIndex++;
    if($scope.itemIndex < $scope.items.length){
      $scope.currentItem = $scope.items[$scope.itemIndex];
    }
  };

  //when user swipes right, take them to the buy confirmation page
  $scope.onSwipeRight = function(){
    //mark this item as interested
    BuyItems.interestedItemId = $scope.currentItem.imageId;
    //take the user to the buy confirmation page
    $state.go('tab.buyconfirmation');
  };

  //show them the next item, same as swiping left
  $scope.nextItem = function(){
    $scope.onSwipeLeft();
  };

  //take them to the buy confirmation page, same as swiping right
  $scope.buyItem = function(){
    $scope.onSwipeRight();
  };
});