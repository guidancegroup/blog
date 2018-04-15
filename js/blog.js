
var blog = angular.module('myBlog', [ 'ngRoute']);
//========================================================================================================================================

blog.config([ '$routeProvider', function($routeProvider) {
	
	$routeProvider.when('/read', {
		templateUrl : 'blogs/blog.html',
	}).when('/blogs', {
		templateUrl : 'blogs/BlogsList.html',
		controller:'blogControl'
	})
	.otherwise({
		redirectTo : '/blogs'
	});
} ]);

blog.filter('trustUrl', function ($sce) {
    return function(url) {
    	url='blogs/'+url+'.txt';
        return $sce.trustAsResourceUrl(url);
      };
   });

blog.controller('blogControl', function($rootScope,$scope) {
	
	$scope.readBlog=function(blog){
		$rootScope.currentBlog=blog;
	}
	//Blog Entry
	$rootScope.blogsData={
			"blogs":[
				{
					"name":"sample",
					"summary":"this  is a sample blog for guidance group awesome its working",
					"fileName":"sample",
					"publishDate":"12/4/2018",
					"blogImage":"sample"
				},
				{
					"name":"sample2",
					"summary":"this  is a SECOND sample  blog for guidance group awesome its working",
					"fileName":"sample2",
					"publishDate":"16/4/2018",
					"blogImage":"sample"
				}
			]
	};
	
});


