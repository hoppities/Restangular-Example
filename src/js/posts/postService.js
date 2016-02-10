(function() {

	'use strict';

	angular.module('postService', [])

	.factory('Post', ['Restangular', function(Restangular) {
			var restAngular = Restangular.withConfig(function(Configurer) {
				Configurer.setBaseUrl('http://jsonplaceholder.typicode.com');
			});
			var postService = restAngular.all('posts');

			return {
				get: function() {
					return restAngular.one('posts').get();
				}
		};
	}]);

})();