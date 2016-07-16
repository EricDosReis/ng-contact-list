(function() {
	'use strict';

	angular
	  .module('ContactList')
	  .config(interceptorsConfig);

	interceptorsConfig.$inject = ['$httpProvider'];

	function interceptorsConfig($httpProvider) {

		$httpProvider.interceptors.push('loadingInterceptor');
		$httpProvider.interceptors.push('errorInterceptor');

	}
})();
