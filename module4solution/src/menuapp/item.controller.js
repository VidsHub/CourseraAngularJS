(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['$stateParams','categories'];
	function ItemsController($stateParams,categories) {
		var item = this;
		console.log($stateParams.categoryId);
	}
})();