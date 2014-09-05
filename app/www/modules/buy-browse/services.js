angular.module('buybrowse.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('BuyItems', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
    { id: 0, description: 'roadmaster cycle', imgUrl:'img/items/cycle.jpg', price:'$60'  },
    { id: 1, description: 'red guitar', imgUrl:'img/items/guitar.jpg', price:'$80' },
    { id: 2, description: 'comfy loveseat', imgUrl: 'img/items/loveseat.jpg', price:'$120'},
    { id: 3, description: 'old tea table', imgUrl:'img/items/tea-table.jpg', price:'$50' }
  ];

  return {
    all: function() {
        return items;
    }
  }
});
