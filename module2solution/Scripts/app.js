(function () {
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyController.$inject=['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyItems = this;
		toBuyItems.items=ShoppingListCheckOffService.getToBuyItems();

		toBuyItems.moveToBought=function (itemIndex) {
			try {
			ShoppingListCheckOffService.moveToBoughtList(itemIndex);
		} catch(error) {
			toBuyItems.errorMessage=error.message;
		}
		};

		
	}

	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtItems=this;
		boughtItems.items=ShoppingListCheckOffService.getBoughtItems();
		boughtItems.isEmpty= function() {
			if (boughtItems.items.length==0) 
				return true;
		}

	}

	//service Function

	function ShoppingListCheckOffService() {
		var service=this;

		var toBuy= [

		{
			name: "Milk",
			quantity: "10 Bottles"

		},
		{
			name: "cookies",
			quantity: "4 Packets"
		},
		{
			name: "Cereal",
			quantity: "15 Boxes"
		},
		{
			name: "Sugar",
			quantity: "6 Packets"
		},
		{
			name: "Honey",
			quantity: "10 Bottles"
		},
		{
			name: "Chocolate",
			quantity: "8 Bars"
		}
		];


		var bought=[];

		service.getToBuyItems=function() {
			console.log(toBuy);
			return toBuy;
		}

		service.getBoughtItems= function() {
			return bought;

		}

		service.moveToBoughtList=function (itemIndex) {
			var isEmptyToBuyList;
			var itemName=toBuy[itemIndex].name;
			var itemQty=toBuy[itemIndex].quantity;
			var item={name: itemName,
					  quantity: itemQty
					};

			bought.push(item);
			toBuy.splice(itemIndex,1);
			if(toBuy.length==0) {
				throw new Error ("Everything is bought!");
			}
		}

		}

		


})();