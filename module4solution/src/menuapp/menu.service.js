(function () {
	'use strict';

	angular.module('data')
	.service('MenuService', MenuService)
	.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

	MenuService.$inject = ['$http', 'ApiBasePath'];

	function MenuService($http, ApiBasePath) {
		var service = this;
		var categories = [];
		var items = [];

		service.getAllCategories = function() {
			return $http({
				method: 'GET',
				url: (ApiBasePath + '/categories.json')
			})
			.then (function (response) {
				categories=response.data
				return categories;
			})
			.catch(function (error) {
				console.log("Error in http GET");
			});
		}

		service.getItemsForCategory = function(categoryShortName) {
			console.log(categoryShortName);
			return $http({
				method: 'GET',
				url: (ApiBasePath + '/menu_items.json?category=' + categoryShortName)
			})
			.then (function (response) {
				items=response.data;
				console.log(items);
				return items;
			})
			.catch(function (error) {
				console.log("Error in http GET");
			});
			
		}
	}


})();