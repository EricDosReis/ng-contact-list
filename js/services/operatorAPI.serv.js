angular.module('ContactList')
	.service('OperatorAPI', function($http, config) {

		this.getAll = function() {
			return $http.get(config.BASEURL + '/operator');
		}

	});
