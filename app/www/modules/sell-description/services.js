angular.module('sell.Services', [])

.factory('SaleItem', function() {

  var price = 0;
  var description = "";
  // imgUrl is fake testing data
  var imgUrl = "";

  return {
    price: price,
    description: description,
    imgUrl: imgUrl

  };
});

