angular.module('buybrowse.services', [])

.factory('BuyItems',  function($q) {

  //this variable stores the item's imageId that the user is interested in
  var interestedItemId = "";

  //marks an item as skipped by pushing the imageId to the current user's skippedImages array
  var markItemAsSkipped = function(imageId){
    //if the currently logged-in user's skippedImages array doesn't already contain it, push the imageId to the array 
    if(Parse.User.current().attributes.skippedImages.indexOf(imageId) === -1){
      Parse.User.current().attributes.skippedImages.push(imageId);  
    }
    //save the changed data to Parse
    Parse.User.current().save(null,{
      success:function(){
        //uncomment the lines to see success messages and changed skippedImages array in the user attributes
        //console.log("current user saved");
        //console.log(Parse.User.current().attributes);
      }, error: function(err){
        console.log(err);
      }
    });
  };

  //marks an item as purchased by changing the 'purchased' attribute of an image
  var markItemAsPurchased = function(imageId){
    //new query on the Items table from Parse
    var query = new Parse.Query('Items');
    //get only the records where the objectId is equal to imageId
    query.equalTo('objectId', imageId);
    //find the record, an array consisting of a single record is returned
    query.find().then(function(items){
      //set its purchased attribute to true
      items[0].set("purchased" , true);
      //save the record to Parse
      return items[0].save();
    }).then(function(item){
      console.log("saved");
    });
  };

  //get all items which have not been purchased, have not been skipped by the logged-in user and not the user's own items
  var getNewItems = function(){
    //using a promise to return items
    var deferred = $q.defer();
    var items = [];
    //new query on the Items table from Parse
    var query = new Parse.Query('Items');
    //return only those fields back
    query.select("userId", "imgURL", "price", "description", "objectID", "location");
    //exclude records belonging to the logged-in user(his/her own items)
    query.notEqualTo("userId", Parse.User.current().id);
    //exclude already purchased items
    query.notEqualTo("purchased", true);
    //exclude the items which the user has skipped
    query.notContainedIn("objectId", Parse.User.current().attributes.skippedImages);
    //find all those records satisfying the above mentioned constraints
    query.find().then(function(results){
      //for each of the records
      results.forEach(function(result){
        //get the attributes (all fields mentioned in query.select)
        var attributes = result.attributes;
        //push the unique identifier of the image too onto a key
        attributes["imageId"] = result.id;
        //push these attributes onto an array of items
        items.push(attributes);
      });
      //once all the records' attributes are pushed, resolve the query and pass the items array along
      deferred.resolve(items);
    });
    //return a promise
    return deferred.promise;
  }
  return {
    interestedItemId : interestedItemId,
    getNewItems: getNewItems,
    markItemAsPurchased: markItemAsPurchased,
    markItemAsSkipped: markItemAsSkipped
  }
});
