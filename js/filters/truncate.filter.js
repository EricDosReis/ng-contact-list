(function() {

	'use strict';

	angular
	  .module('filter.truncate', [])
	  .filter('truncate', truncate);

	truncate.$inject = [];

	function truncate() {

		return function(input, size) {
			if (input.length <= size)
				return input;
			else
				return input.substring(0, (size || 5)) + '...';
		};

	}
})();
