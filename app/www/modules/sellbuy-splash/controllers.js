angular.module('sellbuy', ['sellbuy.services'])

.controller('SellbuyController', function($scope, $state, $ionicPopup) {
  // If user selects 'sell', direct them to the camera splash
  $scope.goToCamera = function() {
    $state.go('tab.camera');
  };
  
  // If user selects 'buy', direct them to the 'buybrowse' state/pages
  $scope.goToBuy = function() {
    if(Parse.User.current().attributes.newUser) {
      $ionicPopup.alert({
        title: 'Swipe right to buy, <br> swipe left to skip.' 
      })
      .then(function(res) {
        Parse.User.current().save(null, {
          success: function(existingUser) {
            existingUser.set('newUser', false);
            existingUser.save();
          }
        });
      });
    }
    $state.go('tab.buybrowse');
  };
});
