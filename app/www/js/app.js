// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'login', 'sellbuy', 'sell', 'camerasplash', 'settings', 'ui.router']) 

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

    // routing for settings page
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'modules/settings/settings.html',
          controller: 'SettingsController'
        }
      }
    });

  // If a user has a session token, direct them to the buy screen; else, direct them to login/signup
  if(Parse.User.current()) {
    $urlRouterProvider.otherwise('/tab/sell');
  } else {
    $urlRouterProvider.otherwise('/login');
  }
});

