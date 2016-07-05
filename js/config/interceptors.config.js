angular.module('ContactList')
	.config(function ($httpProvider) {

		$httpProvider.interceptors.push('loadingInterceptor');
		$httpProvider.interceptors.push('errorInterceptor');

	});
