'use strict';

describe('SellController', function(){

// declare all of the dependencies that the controller/service requires
  var $scope;
  var $rootScope;
  var $state;
  var SaleItem;

  // before each test, login testspec user (username: testspec, password: testspec)
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

  // inject the module containing the controller to test
  beforeEach(module('sell'));

  // inject the Parse module for testing
  beforeEach(module('login'));

  // inject the router if the module depends on it
  beforeEach(module('ui.router'));

  // inject up the dependencies
  beforeEach(inject(function($injector){

    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    SaleItem = $injector.get('SaleItem');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    // create the mock controller to use for the tests
    var createController = function() {
      return $controller('SellController', {
        $scope:$scope,
        SaleItem: SaleItem
      });
    };

    // instantiate the mock controller to use for the tests
    createController();

  }));

  it('should have an item property on the $scope', function () {
    expect($scope.item).to.be.an('object');
  });

  it('should have a retake method on the $scope', function () {
    expect($scope.retake).to.be.a('function');
  });

  it('should have a sell method on the $scope', function () {
    expect($scope.sell).to.be.a('function');
  });

  // test the sell function by creating and saving a test item to Parse, then retrieve it
  describe('sell function', function(){

    // find and destroy the test item if it already exists in Parse
    before(function(){

      // query Parse for the test item
      var testItem = Parse.Object.extend("Items");
      var query = new Parse.Query(testItem);
      query.equalTo('description', 'Tissot watch. (NOT STOLEN)');
      query.find({
        success: function(result) {
          // The object was retrieved successfully.
          console.log('item found: ', result);
          // if it already exists, destroy (delete) the test item
          if(result[0]) {
            result[0].destroy({
              success: function(result) {
                console.log('testSpecItem found and deleted');
              },
              error: function(result, error){
                console.log('error deleting item: ', error);
              }
            });
          }
        },
        error: function(object, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and description.
          console.log('error retrieving object: ', error);
        }
      })

      // create and store the testItem
      .then(function(){
        var testItem = {
          price: 150,
          description: 'Tissot watch. (NOT STOLEN)',
          imgUrl: 'http://files.parsetfss.com/8e32bd8e-a00d-45eb-bd48-4c8ba115dc14/tfss-c7e557e9-b6ea-4062-ab16-1c91893d0842-cb.jpg'
        };
        $scope.sell(testItem);
      });
    });

    it('should create and upload a new Parse item to the Parse database', function (done) {
      var retrievedFromParse = false;
      var testItem = Parse.Object.extend("Items");
      var query = new Parse.Query(testItem);
      query.equalTo('description', 'testSpecItem');
      query.find({
        success: function(result) {
          // The object was retrieved successfully.
          console.log('item found: ', result);
          retrievedFromParse = true;
          expect(retrievedFromParse).to.be.ok;
          done();
        },
        error: function(result, error) {
          // The object was not retrieved successfully.
          // error is a Parse.Error with an error code and description.
          console.log('error retrieving object: ', error);
        }
      });
    });
  });
});
