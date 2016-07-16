(function() {
	'use strict';

	angular
	  .module('ContactList')
	  .factory('ContactAPI', ContactAPI);

	ContactAPI.$inject = ['$http', 'config'];

	function ContactAPI($http, config) {

		var _getAll = function() {
			return $http.get(config.BASEURL + '/contact');
		};

		var _getOne = function(id) {
			return $http.get(config.BASEURL + '/contact/' + id);
		};

		var _save = function(contact) {
			return $http.post(config.BASEURL + '/contact', contact);
		};

		return {
			getAll: _getAll,
			getOne: _getOne,
			save:   _save
		};

	}
})();
