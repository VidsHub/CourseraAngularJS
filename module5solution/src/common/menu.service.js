(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath','$q'];
function MenuService($http, ApiPath,$q) {
  var service = this;
  var deferObject;    
  var userdata={};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
    
   
    
    service.getFavItem= function (favItemShortName) {
     
     var promise=$http.get(ApiPath + '/menu_items/' + favItemShortName + '.json'),
     deferObject =  deferObject || $q.defer();
 
    promise.then(
      // OnSuccess function
      function(answer){
        // This code will only run if we have a successful promise.
        deferObject.resolve(answer);
      },
      // OnFailure function
      function(reason){
          console.log("error!");
        // This code will only run if we have a failed promise.
        deferObject.reject(reason);
      })
    //promise.finally(function (result) {return deferObject.promise;}) 

        return deferObject.promise;   
 }

 service.saveForm=function(user) {
     userdata=user;
    console.log(userdata);

 }

 service.getUserInfo=function() {
    console.log(userdata);
    
    return userdata;
 }
};
 

})();
