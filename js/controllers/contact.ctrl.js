angular.module('ContactList')
	.controller('ContactCtrl', function (ContactAPI, OperatorAPI, $location, $routeParams) {

		var vm = this;

		getOperators();

		if ($routeParams.id)
			getContact($routeParams.id);

		function getContact(id) {
			ContactAPI.getOne(id).success(data => {
				vm.contact = data;
			}).error(data => {
				errorMessage(data);
			});
		}

		function getOperators() {
			OperatorAPI.getAll().success(data => {
				vm.operators = data;
			}).error(data => {
				errorMessage(data);
			});
		}

		function errorMessage(message) {
			vm.errorMessage = 'Something is wrong: ' + message;
		}

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

	});
