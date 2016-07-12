(function () {
	'use strict';
	angular
		.module('shopSite')
		 .factory('API', function($http) {

		 	var token = 'N5JGY3RWWTW51XZTYVSN';


		 	function getBlogs()
		 	{

		 		var call = $http({
		          method: 'GET',
		          headers: {
		            X_CSRF_TOKEN:token,
		          },
		          url: `https://tiyagencyweek.herokuapp.com/blogs`
		        });

		        return call;

		 	}


		 	function getBikes() {
		 		var itemList = {
		        image:"http://cdn.grindtv.com/wp-content/uploads/2013/10/citybike_purecity.jpg",
		        name:"Slow Ride",
		        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		        price:200,
		        id:0,
		        category:3,
		       };

		       var itemList2 = {
		        image:"http://www.minipocketrockets.com/products/mini-dirt-bikes.jpg",
		        name:"The Dirt Master",
		   		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		        price:200,
		        id:1,
		        category:1,
		       };

		        var itemList3 = {
		        image:"http://thundermountainbikepark.com/wp-content/uploads/2015/03/specialized-dh.jpg",
		        name:"Rock and Roll",
		        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		        price:200,
		        id:2,
		        category:2,
		       };

		        var itemList4 = {
		        image:"https://momentummag.com/wp-content/uploads/mp-import/5%20City%20Bikes%20Under%20500-StateShorelineDeluxe.jpg",
		        name:"Classic City",
		        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		        price:200,
		        id:3,
		        category:3,
		       };

		        var itemList5 = {
		        image:"http://cloudfront.ojcommerce.com/img/prods/large/r9000_mongoose_impasse_29_mountain_bike.jpg",
		        name:"Hit The Hills",
		        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		        price:200,
		        id:4,
		        category:2,
		       };

		        var itemList6 = {
		        image:"http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/1390574/honda-crf-150-f-off-road-dirt-bike-2008.jpg?1297194933",
		        name:"Mad Max",
		        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		        price:200,
		        id:5,
		        category:1,
		       };

		       var data = [itemList,itemList2,itemList3,itemList4,itemList5,itemList6];
		 	
		       return data;
		 	}

		 	return {
		 		getBikes:getBikes,
		 		getBlogs:getBlogs
		 	}

		 
		 });
})();