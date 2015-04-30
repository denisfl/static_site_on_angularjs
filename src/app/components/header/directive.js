'use strict';

angular.module('app.components').directive('appHeader', function() {
	return {
		restrict: 'E',
		templateUrl: '/app/components/header/template.html',
    scope: true
	};
});
