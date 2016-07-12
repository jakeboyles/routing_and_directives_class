(function() {
    'use strict';
    angular
        .module('shopSite', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'main'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		      'search': {
		        templateUrl: '../views/partials/search.html',
		      },
		  },
	    })
	    .state('category', {
      	url: '/category',
      	views: {
      		'main': {
		        templateUrl: '../views/category.html',
		        controller: 'CategoryController',
		        controllerAs: 'category'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    })
	    .state('categoryList', {
      	url: '/category/:catid',
      	views: {
      		'main': {
		        templateUrl: '../views/list.html',
		        controller: 'CategoryListController',
		        controllerAs: 'list'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    })
	    .state('list', {
      	url: '/list',
      	views: {
      		'main': {
		        templateUrl: '../views/list.html',
		        controller: 'ListController',
		        controllerAs: 'list'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    })
	    .state('detail', {
      	url: '/detail/:item',
      	views: {
      		'main': {
		        templateUrl: '../views/detail.html',
		        controller: 'DetailController',
		        controllerAs: 'detail'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    });
	});
})();


