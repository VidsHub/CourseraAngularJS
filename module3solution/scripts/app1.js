(function () {

	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems',FoundItems);

	function FoundItems() {
		var ddo = {
			templateUrl: 'foundItem.html',
			scope: {
				items: '<',
				onRemove: '&'
			},
		controller: FoundItemsDirectiveController,
    	controllerAs: 'ctrl',
    	bindToController: true
		};
		
		return ddo;
	}

	function FoundItemsDirectiveController() {
		//return this;
	}


	NarrowItDownController.$inject=['MenuSearchService'];

	function NarrowItDownController(MenuSearchService) {

		var ctrl=this;
		ctrl.searchTerm="";
		//ctrl.foundItems=[];
		ctrl.found=[];
		ctrl.output="";


		ctrl.findList = function() {
			var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
			promise.then(function(response) {
				ctrl.found=response;
				console.log(ctrl.found);
				if(ctrl.found.length==0) {
					ctrl.output="Nothing Found!"
				}
				else {
					ctrl.output="";
				}

			})
		}

		ctrl.removeItem = function(index) {
			ctrl.found.splice(index,1);
		}
	}

	MenuSearchService.$inject=['$http'];

	function MenuSearchService($http) {

		var service=this;
		var foundItems=[];
		var responseArray= [];

		service.getMatchedMenuItems = function (searchTerm) {

			return $http({
					method: "GET",
					url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
				}).then(function success(response) {

					//console.log(response.data);
					responseArray=response.data;
					foundItems=[];
					//console.log(responseArray);
					//console.log(response.data.menu_items.length);
					//console.log(searchTerm);

					for(var i=0; i<responseArray.menu_items.length; i++) {
						if(responseArray.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1) {
							foundItems.push(responseArray.menu_items[i]);
						}
					}
					console.log(foundItems);
					return foundItems;
				})
				.catch(function failure(error) {
					console.log("error is JSON fetch");
				});
		}
	}
})();