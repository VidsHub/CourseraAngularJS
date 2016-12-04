(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('CategoryitemsController', CategoryitemsController)

	CategoryitemsController.$inject=['categoryitems'];

	function CategoryitemsController(categoryitems) {
		var items=this;

		items.categoryitems=categoryitems;
		console.log(items.categoryitems);


	}
})();
