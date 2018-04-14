var blog = angular.module('myBlog', [ 'ngRoute','ngCookies' ]);
//========================================================================================================================================

blog.config([ '$routeProvider', function($routeProvider) {
	
	$routeProvider
	.when('/:page', {
         templateUrl: function(routeParams){
             		return 'blogs/'+routeParams.page+'.html';
        		}
    	})
	.otherwise({
		redirectTo : '/home'
	});
} ]);

blog.controller('blogControl', function($rootScope,$scope,$cookies) {
	
	console.log("working");
	
});
