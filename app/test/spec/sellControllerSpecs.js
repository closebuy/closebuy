'use strict';

describe('SellController', function(){

// declare all of the dependencies that the controller/service requires
    var $scope;
    var $rootScope;
    var $state;
    var SaleItem;

    // inject the module containing the controller to test
    beforeEach(module('sell'));

    // inject the router if the module depends on it
    beforeEach(module('ui.router'));

    // set up the dependencies
    beforeEach(inject(function($injector){

      $rootScope = $injector.get('$rootScope');
      $state = $injector.get('$state');
      SaleItem = $injector.get('SaleItem');
      $scope = $rootScope.$new();

      var $controller = $injector.get('$controller');

      var createController = function() {
        return $controller('SellController', {
          $scope:$scope,
          SaleItem: SaleItem
        });
      };

      // create the mock controller to use for the tests
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

describe('sell function', function(){
  it('should create and upload a new Parse item to the Parse database', function () {
    var item = {
      price: 50,
      description: 'SpecTestItem',
      imgUrl: 'string'
    };

    $scope.sell(item);

    expect($scope.sell).to.be.a('function');
  });

});

});
