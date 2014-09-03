angular.module('sell.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('SaleItem', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var price = 0;
  var description = "";
  var imgUrl = "https://raw.githubusercontent.com/closebuy/closebuy/master/reference/IMG_20140829_151143.jpg";

  return {
    price: price,
    description: description,
    imgUrl: imgUrl

  };
})


// .factory('SellService', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var price = 0;
//   var description = "";
//   var imgUrl = "https://raw.githubusercontent.com/closebuy/closebuy/master/reference/IMG_20140829_151143.jpg";

//   return {
//     price: price,
//     description: description,
//     imgUrl: imgUrl

//   };
// });
