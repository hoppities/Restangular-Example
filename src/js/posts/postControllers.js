(function() {

	'use strict';

	angular.module('postControllers', [])

	.controller('testController', ['$scope', 'Post', 'Restangular', function ($scope, Post, Restangular) {
		Post.get().then(function(results) {
			$scope.posts = results;
		});
	}]);
})();