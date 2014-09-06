angular.module('sell.Services', [])

.factory('SaleItem', function() {

  var price = 0;
  var description = "";
  var imgUrl = "";

  return {
    price: price,
    description: description,
    imgUrl: imgUrl
  };
  
});

