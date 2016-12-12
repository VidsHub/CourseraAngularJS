(function () {
"use strict";

angular.module('public')
.component('favItem', {
  templateUrl: 'src/public/Sign-up/favitem.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemController
});


MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
