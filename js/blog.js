var blog = angular.module('myBlog', [ 'ngRoute','ngCookies' ]);
//========================================================================================================================================

blog.config([ '$routeProvider', function($routeProvider) {
	
	$routeProvider.when('/home', {
		templateUrl : 'blogs/main.html',
	})
	.otherwise({
		redirectTo : '/home'
	});
} ]);

blog.controller('blogControl', function($scope,$cookies) {
	console.log("working");
});
