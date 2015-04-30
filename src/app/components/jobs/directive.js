'use strict';

angular.module('app.components').directive('jobsList', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/jobs/template.html',
    scope: true
  };
});
