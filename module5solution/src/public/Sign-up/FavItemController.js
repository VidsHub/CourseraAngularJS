(function() {
    'use strict';
    
    angular.module('public')
    .controller('FavItemController', FavItemController);
    
   
    FavItemController.$inject=['MenuService','$scope']
    function FavItemController(MenuService, $scope) {
        var reg=this;
        $scope.submitForm={};
        var userdata={};
        //var favitemdata={};
        var favitem={};
       
        
        reg.myFavItem=function() {
            var favitem=reg.fdish;
             reg.success=false;
             reg.error=false;
            //var favItemObj={};
            console.log(favitem);
            console.log($scope.submitForm);
            
            var favItemObj= MenuService.getFavItem(favitem);
            
            favItemObj.then(
                function (answer) {
                console.log("Success in controller");
                reg.success=true;
                reg.favitemdata=answer.data;
                console.log(reg.favitemdata);
                userdata={
                fname: reg.fname,
                lname: reg.lname,
                email: reg.email,
                phone: reg.phone,
                favdish: reg.fdish,
                favitem: reg.favitemdata,
                reguser: true
            };


            MenuService.saveForm(userdata);
            },
                function (reason){
                console.log(reason.data);
                reg.error=true;
                userdata={
                fname: reg.fname,
                lname: reg.lname,
                email: reg.email,
                phone: reg.phone,
                favdish: reg.fdish,
                reguser:true
                //favitem: reg.favitemdata
            };


            MenuService.saveForm(userdata);
            }
            );

           // userdata={
           //     fname: reg.fname,
           //     lname: reg.lname,
           //     email: reg.email,
           //     phone: reg.phone,
           //     favdish: reg.fdish,
           //     favitem: reg.favitemdata
           // };


            //MenuService.saveForm(userdata);
            
            
                
        }

        reg.getUserData=function() {
            console.log($scope.submitForm);
            //return $scope.submitForm;

        }
    }
    
    
})();
