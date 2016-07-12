(function() {
    'use strict';
    
    angular
    .module('shopSite')
    //function to create new item and push to list
    .controller('CategoryListController', function(API,$stateParams) {
       var vm = this;

       var categoryId = $stateParams.catid;


       var data = API.getBikes();

       var array = [];

       data.forEach(function(bike){
        if(bike.category == categoryId)
        {
          array.push(bike);
        }
       })

       vm.data = array;

      
    });
})();