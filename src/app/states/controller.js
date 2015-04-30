'use strict';

angular.module('app.controllers').controller('MainCtrl', function($scope, $http) {

  $http.get('./data/me.json').
    success(function(data, status, headers, config) {
      //return $scope.me = data;
      $scope.me = data;

      $scope.socials = data.socials;
      $scope.contacts = data.contacts;
    }).
    error(function(data, status, headers, config) {
      console.log('missing load .json');
    });

});
