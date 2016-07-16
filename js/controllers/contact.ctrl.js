(function() {
	'use strict';

	angular
	  .module('ContactList')
	  .controller('ContactCtrl', ContactCtrl);

	ContactCtrl.$inject = ['ContactAPI', 'OperatorAPI', '$location', '$routeParams'];

	function ContactCtrl(ContactAPI, OperatorAPI, $location, $routeParams) {

		var vm = this;

		getOperators();

		if ($routeParams.id)
			getContact($routeParams.id);

		vm.saveContact = function(contact) {
			vm.contact.createdOn = new Date();

			ContactAPI.save(contact).success(data => {
				$location.path('/contacts');

			}).error(data => {
				errorMessage(data);
			});
		};

		vm.deleteContact = function(contacts) {
			vm.contacts = contacts.filter(contact => {
				return !contact.selected;
			});
		};

		function getOperators() {
			OperatorAPI.getAll().success(data => {
				vm.operators = data;
			}).error(data => {
				errorMessage(data);
			});
		}

		function getContact(id) {
			ContactAPI.getOne(id).success(data => {
				vm.contact = data;
			}).error(data => {
				errorMessage(data);
			});
		}

		function errorMessage(message) {
			vm.errorMessage = 'Something is wrong: ' + message;
		}

	}
})();
