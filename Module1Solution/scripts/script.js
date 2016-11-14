(function () {
  'use strict';
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.menu="";
    $scope.display = function () {
      var menuItems=[];
      var localMenu=$scope.menu;
      var totalItems=0;
      if(localMenu=="") {
        $scope.message="Please enter data first";
        $scope.msgColor="red"
      }
      else {
        menuItems=localMenu.split(',');
        console.log(menuItems);
        for(var i=0; i<menuItems.length;i++) {
          if(menuItems[i].trim()!="") {
            totalItems+= 1;
          }
          $scope.totalItems=totalItems;
          console.log(totalItems);
          if(totalItems==0) {
            $scope.message="Please enter data first."
            $scope.msgColor="red";
          }
          else if(totalItems<=3) {
          $scope.message="Enjoy!";
          $scope.msgColor="green";
        }
          else {
            $scope.message="Too much!";
            $scope.msgColor="green"
          }
        }
      }
    }
  }
})();
