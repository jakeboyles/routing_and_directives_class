(function() {
    'use strict';
    
    angular
    .module('shopSite')
    //function to create new item and push to list
    .controller('DetailController', function(API,$stateParams) {
       var vm = this;

       var data = API.getBikes();

       vm.item = data[$stateParams.item];
      
    });
})();