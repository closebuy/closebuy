angular.module('camerasplash', ['camerasplash.services', 'sell.Services'])

.controller('CameraController', ['$scope', '$state', 'Camera', 'SaleItem', function($scope, $state, Camera, SaleItem) {
  $scope.showLoader = false;
  // $scope.cam = Camera.picUrl;
  $scope.cam = Camera.picUrl;
  // this watcher links $scope.cam to the Camera.picUrl service
  // so that it updates when Camera.picUrl is changed
  $scope.$watch(function () { return Camera.picUrl }, function (newVal, oldVal) {
    if (typeof newVal !== 'undefined') {
      $scope.cam = Camera.picUrl;
    }
  });

	$scope.takePic = function() {
    Camera.getPicture().then(function(imageData) {
      $scope.showLoader = true;
      // saving the photo as a base64 image and prefixing
      // it with the appropriate format
      var base64pic = "data:image/jpeg;base64," + imageData;
      // uploading to Parse using the Parse Javascript SDK
      var parseFile = new Parse.File("cb.jpg", {base64:imageData});

      parseFile.save().then(function(response) {
        // sets the picUrl in the factory to the URL of the image on Parse
        Camera.picUrl = response._url;

        // change the SaleItem imgUrl to match the picUrl
        SaleItem.imgUrl = Camera.picUrl;

        $state.go('tab.sell');
      }, function(error) {
        // file could not be uploaded to Parse
        alert(error);
      });

    }, function(err) {
      console.err(err);
    });
  };
}])
.config(function($compileProvider){
  // VERY important. Do not touch. This whitelists the image source
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
})