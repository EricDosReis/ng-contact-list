(function() {
	'use strict';

	angular
	  .module('ContactList')
	  .service('OperatorAPI', OperatorAPI);

	OperatorAPI.$inject = ['$http', 'config'];

	function OperatorAPI($http, config) {

		this.getAll = function() {
			return $http.get(config.BASEURL + '/operator');
		}

	}
})();
