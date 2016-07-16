(function() {
	'use strict';

	angular
	  .module('ContactList')
	  .factory('errorInterceptor', errorInterceptor);

	errorInterceptor.$inject = ['$q', '$location'];

	function errorInterceptor($q, $location) {

		return {
			responseError: function(rejection) {
				switch (rejection.status) {
					case 404:
						$location.path('/error404');
						break;
					case 500:
						$location.path('/error500');
						break;
				}

				return $q.reject(rejection);
			}
		};

	}
})();
