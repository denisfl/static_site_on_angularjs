'use strict';

angular.module('app', [
  'ngResource',
  'ui.router',

  'app.components',
  'app.controllers'
  ])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/states/main/view.html'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  })
;
