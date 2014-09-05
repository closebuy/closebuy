angular.module('buyconfirm', [])

.controller('ConfirmController', function($scope, $state) {
  $scope.thankBuyer = function(){
    console.log("Thank you buyer");
    $state.go('tab.buythankyou');
  };
})
