angular.module('sell.Services', [])

.factory('SaleItem', function() {

  var price = 0;
  var description = "";
  // imgUrl is fake testing data
  var imgUrl = "https://raw.githubusercontent.com/closebuy/closebuy/master/reference/IMG_20140829_151143.jpg";

  return {
    price: price,
    description: description,
    imgUrl: imgUrl

  };
});

