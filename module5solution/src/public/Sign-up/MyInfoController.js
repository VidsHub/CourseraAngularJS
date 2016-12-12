(function() {
	'use strict';
	angular.module('public')
	.controller('MyInfoController', MyInfoController);

	MyInfoController.$inject=['userInfo', 'ApiPath'];
	function MyInfoController(userInfo, ApiPath) {
		var $ctrl=this;
		$ctrl.registered=true;
		$ctrl.userInfo=userInfo;
		$ctrl.basePath=ApiPath;
		if($ctrl.userInfo.fname==undefined) {
			$ctrl.registered=false;
			console.log("not registered");
			$ctrl.showMessage=true;
		}
		console.log($ctrl.userInfo);
		console.log($ctrl.userInfo.fname);
	}
})();


