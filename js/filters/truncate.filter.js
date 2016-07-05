angular.module('utils.filters', []);

angular.module('utils.filters').filter('truncate', function() {
	return function(input, size) {
		if (input.length <= size)
			return input;
		else
			return input.substring(0, (size || 5)) + '...';
	};
});
