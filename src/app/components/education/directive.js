'use strict';

angular.module('app.components').directive('educationsList', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/education/template.html',
    scope: true
  };
});
