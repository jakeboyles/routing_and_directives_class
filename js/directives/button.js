(function() {
    'use strict';
    
    angular
    .module('shopSite')
	.directive('blog', [function (API) {
	  return {
	    restrict: 'E',
	    templateUrl:"./views/partials/singleblog.html",
	    link: function (scope, element, attrs) { 
	      // element.on('click', function () {
	      //   element[0].style = 'background-color: ' + attrs.bgcolor+";color:"+attrs.taco+";";
	      	
	      // 	var background = document.getElementById('body');

	      // 	background.style="background-color:red";

	      // });


	      var blog = attrs.item;

	      blog = JSON.parse(blog);

	      scope.blog = blog;

	    }
	  };
	}])
})();
