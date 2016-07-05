angular.module('ContactList')
	.config(function ($routeProvider) {

		$routeProvider.when('/contacts', {
			templateUrl: 'views/contacts.html',
			controller:  'ContactsCtrl as vm'
		});

		$routeProvider.when('/contact/:id?', {
			templateUrl: 'views/contact.html',
			controller:  'ContactCtrl as vm'
		});

		$routeProvider.when('/error404', {
			templateUrl: 'views/error404.html',
		});

		$routeProvider.when('/error500', {
			templateUrl: 'views/error500.html',
		});

		$routeProvider.otherwise({ redirectTo: '/contacts' });

	});
