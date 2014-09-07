angular.module('sell', ['sell.Services'])

.controller('SellController', ['$scope', 'SaleItem', '$state', function($scope, SaleItem, $state) {
  // scope.item is set to the value of the SaleItem factory to preserve the sale item data between views
  
  $scope.item =  SaleItem; 

  // take the picture again if it's not approved
  $scope.retake = function(){
    $state.go('tab.camera');
  };

  // upload the item to Parse

  $scope.sell = function(item, callback){
    SaleItem = item;

    // create the Items class to match the Parse Items schema

    var Items = Parse.Object.extend("Items");

    // instantiate a new item

    var newItem = new Items();

    // set the parameters for the new item

    newItem.set('imgURL', SaleItem.imgUrl);
    newItem.set('price', SaleItem.price);
    newItem.set('description', SaleItem.description);
    newItem.set('purchased', false);

    // Parse.User.current() gets the current user's data
    newItem.set('location', Parse.User.current().attributes.location);
    newItem.set('userId', Parse.User.current().id);


    newItem.save(null, {
      success: function(newItem) {
        console.log("new item saved successfully");
          // go to the next view when the item is saved successfully.
          $state.go('sell-confirmation');
      },
      error: function(err) {
        alert("Error: the item was not uploaded successfully, please try again");
      }
    });
  };
}]);

