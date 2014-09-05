// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'login', 'sellbuy', 'sell', 'camerasplash', 'buybrowse', 'buyconfirm', 'buythankyou', 'ui.router']) 

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // Routing for user login/signup page
    .state('login', {
      url: "/login",
      templateUrl: "modules/login/login.html"
    })

    // Routing for sellbuy-splash page
    .state('sellbuy', {
      url: "/sellbuy-splash",
      templateUrl: "modules/sellbuy-splash/sellbuy-splash.html"
    })

    // setup an abstract state for the tabs directive

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // routing for sell description page
    .state('tab.sell', {
      url: "/sell",
      views: {
        'tab-sell': {
          templateUrl: "modules/sell-description/sell-description.html",
          controller: "SellController"
         }
      }
    })

    // routing for confirmation page
    .state('tab.sell-confirmation', {
      url: "/sell/confirmation",
      views: {
        'tab-sell': {
          templateUrl: "modules/sell-confirmation/sell-confirmation.html",
          controller: "SellController"
         }
      }
    })

    // routing for camera splash page
    .state('tab.camera', {
      url: '/camera',
      views: {
        'tab-camera': {
          templateUrl: 'modules/camera-splash/camera-splash.html',
          controller: 'CameraController'
        }
      }
    })

    // routing for buy browse page
    .state('tab.buybrowse', {
      url: '/buy',
      views: {
        'tab-buy': {
          templateUrl: "modules/buy-browse/buybrowse.html",
          controller: "BuyBrowseController"
         }
      }
    })

    // routing for buy confirmation page
    .state('tab.buyconfirmation', {
      url: "/buy/confirmation",
      views: {
        'tab-buy': {
          templateUrl: "modules/buy-confirmation/buy-confirmation.html",
          controller: "ConfirmController"
         }
      }
    })

    .state('tab.buythankyou', {
      url: '/buy/confirmation/thanks',
      views: {
        'tab-buy': {
          templateUrl: 'modules/buy-thankyou/buy-thankyou.html',
          controller: 'BuyThanksController'
        }
      }
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  // right now this defaults to the "Sell Desription" page
  // Changed to login page for testing of authorization; will change back soon
  $urlRouterProvider.otherwise('/login');
  // $urlRouterProvider.otherwise('/tab/sell');
});

