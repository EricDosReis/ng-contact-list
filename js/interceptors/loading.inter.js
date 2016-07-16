(function() {
	'use strict';

	angular
	  .module('ContactList')
	  .factory('loadingInterceptor', loadingInterceptor);

	loadingInterceptor.$inject = ['$q', '$rootScope', '$timeout'];

	function loadingInterceptor($q, $rootScope, $timeout) {

		return {
			request: function (config) {
				$rootScope.isLoading = true;

				return config;
			},

			requestError: function (rejection) {
				$timeout(() => {
					$rootScope.isLoading = false;
				}, 500);

				return $q.reject(rejection);
			},

			response: function (response) {
				$timeout(() => {
					$rootScope.isLoading = false;
				}, 500);

				return response;
			},

			responseError: function (rejection) {
				$timeout(() => {
					$rootScope.isLoading = false;
				}, 500);

				return $q.reject(rejection);
			}
		};

	}
})();
