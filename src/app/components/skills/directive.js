'use strict';

angular.module('app.components').directive('skillsList', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/skills/template.html',
    scope: true
  };
});
