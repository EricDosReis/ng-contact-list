(function() {
	'use strict';

	angular
	  .module('ContactList', [
			'ngMessages', 'filter.truncate', 'ui.dateMask', 'ui.accordion',
			'ngRoute'
		]);
})();
