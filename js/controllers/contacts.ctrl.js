angular.module('ContactList')
	.controller('ContactsCtrl', function (ContactAPI) {

		var vm       = this;
		vm.contacts  = [];
		vm.viewTitle = 'Contact List';

		getContacts();

		function getContacts() {
			ContactAPI.getAll().success(data => {
				vm.contacts = data;
			}).error(data => {
				errorMessage(data);
			});
		}

		function errorMessage(message) {
			vm.errorMessage = 'Something is wrong: ' + message;
		}

		vm.deleteContact = function(contacts) {
			vm.contacts = contacts.filter(contact => {
				return !contact.selected;
			});
		};

		vm.hasContactSelected = function(contacts) {
			return contacts.some(contact => {
				return contact.selected;
			});
		};

		vm.orderBy = function(orderCriteria) {
			vm.orderCriteria  = orderCriteria;
			vm.orderDirection = !vm.orderDirection;
		};

	});
