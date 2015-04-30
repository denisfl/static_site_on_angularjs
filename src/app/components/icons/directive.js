'use strict';

angular.module('app.components').directive('icons', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/icons/template.html',
    scope: {
      icons: '='
    }
  };
});
