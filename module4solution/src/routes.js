(function () {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider,$urlRouterProvider) {
		//$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'src/menuapp/templates/home.template.html'

			})

			.state('category', {
				url: '/category',
				templateUrl: 'src/menuapp/templates/category.template.html',
				controller: 'CategoryController as menucategory',
				resolve : {
					categories: ['MenuService', function(MenuService) {
						return MenuService.getAllCategories();
					}]
				
				}

			})

			.state('items', {
				url: '/items/{categoryId}',
				templateUrl: 'src/menuapp/templates/categoryitems.template.html',
				controller: 'CategoryitemsController as items',
				resolve: {
					categoryitems: ['MenuService','$stateParams', function(MenuService,$stateParams){
						return MenuService.getItemsForCategory($stateParams.categoryId);
					}]
				}

			});

	}
})();