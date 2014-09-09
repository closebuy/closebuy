'use strict';

describe('BuyBrowseController', function(){

  // declare all of the dependencies that the controller/service requires
  var $scope;
  var $rootScope;
  var $state;
  var $q;
  var BuyItems;

  // inject the module containing the controller to test
  beforeEach(module('buybrowse'));

  // inject the router if the module depends on it
  beforeEach(module('ui.router'));

  // set up the dependencies
  beforeEach(inject(function($injector){

    $rootScope = $injector.get('$rootScope');
    $q = $injector.get('$q');
    $state = $injector.get('$state');
    BuyItems = $injector.get('BuyItems');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    var createController = function() {
      return $controller('BuyBrowseController', {
        $scope:$scope,
        BuyItems: BuyItems
      });
    };

    // create the mock controller to use for the tests
    createController();

  }));

  before(function(){
   Parse.User.logIn('testspec', 'testspec', {
     // If successful in logging user in, make them current user by giving them a session token
     success: function(user) {
       var token = Parse.User.current().getSessionToken();
       Parse.User.become(token, {
         success: function(user) {
         }, 
         error: function(error) {
           return false;
         }
       });
     },
     error: function(user) {
     }
    });
 });

  it('should have a getItems method on the $scope', function(){
    expect($scope.getItems).to.be.a('function');
  });

  it('should have a onSwipeLeft method on the $scope', function(){
    expect($scope.onSwipeLeft).to.be.a('function');
  });

  it('should have a onSwipeRight method on the $scope', function(){
    expect($scope.onSwipeRight).to.be.a('function');
  });

  it('should have a nextItem method on the $scope', function(){
    expect($scope.nextItem).to.be.a('function');
  });

  it('should have a buyItem method on the $scope', function(){
    expect($scope.buyItem).to.be.a('function');
  });

  describe('getItems function', function(){
    //$scope.currentItem = "";
    /*beforeEach(function(done){
      setTimeout(function(){
        BuyItems.getNewItems().then(function(items){
        $scope.items = items;
        $scope.itemIndex = 0;
        $scope.currentItem = $scope.items[$scope.itemIndex];
        done();
        });
      }, 50);
    });*/
    /*it('should set the currentItem', function(done){
      $scope.currentItem = "";
      BuyItems.getNewItems().then(function(items){
        $scope.items = items;
        console.log($scope.items);
        $scope.itemIndex = 0;
        $scope.currentItem = $scope.items[$scope.itemIndex];
        done();
      }).then(function(){
      console.log($scope.currentItem);
      expect($scope.currentItem).to.not.equal("");
    });
   });*/
  });

  describe('onSwipeLeft function', function(){
    /*it('should change the currentItem', function(){

      $scope.getItems();
      var currentItem1 = $scope.currentItem;
      $scope.onSwipeLeft();
      var currentItem2 = $scope.currentItem;
      expect(currentItem1).to.not.equal(currentItem2);
    });*/
  });


});
