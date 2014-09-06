angular.module('camerasplash.services', [])

.factory('Camera', ['$q', function($q) {
  // default picUrl
  var picUrl = '';
  
  // this function uses promises so that it can be used in the controller more cleanly
  var getPicture = function(options) {
    var q = $q.defer();

    navigator.camera.getPicture(
      function(result) {
        q.resolve(result);
      }, 
      function(err) {
        q.reject(err);
      }, 
      {
      // set on a low quality for now so not to kill memory as we're using base64 images
      'quality': 40, 
      // DATA_URL = Base64 image. There are other settings, specifically FILE_URI,
      // which will just list the directory for where the image is saved
      'destinationType': Camera.DestinationType.DATA_URL, 
      // this is important or you'll have inconsistent landscape/portrait shots
      'correctOrientation': true
    });

    return q.promise;
  };

  return {
    picUrl: picUrl,
    getPicture: getPicture
  };
}])