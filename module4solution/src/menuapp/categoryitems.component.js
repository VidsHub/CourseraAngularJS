(function() {
	'use strict';

	angular.module('MenuApp')
	.component('categoryItems', {
		templateUrl: 'src/menuapp/templates/categoryitems.component.template.html',
		bindings: {
			items: '<'
		}

	})
})();
