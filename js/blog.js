var blog = angular.module('myBlog', [ 'ngRoute','ngCookies' ]);
//========================================================================================================================================

blog.config([ '$routeProvider', function($routeProvider) {
	
	$routeProvider
	.when('/page/:route', {
          templateUrl: function($routeParams) { 
            return '/page/'+$routeParams.route+'.html'; 
          }
        })
	.otherwise({
		redirectTo : '/home'
	});
} ]);

blog.controller('blogControl', function($rootScope,$scope,$cookies) {
	
	console.log("working");
	
});
