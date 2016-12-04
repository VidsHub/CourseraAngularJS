(function() {
	'use strict';

	angular.module('MenuApp')
	.component('menuCategories', {
		templateUrl: 'src/menuapp/templates/component.template.html',
		bindings: {
			categories: '<'
		}
	})
})();