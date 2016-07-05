angular.module('ui.dateMask', []);

angular.module('ui.dateMask').directive('uiDateMask', function($filter) {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			var dateFormat = function(date) {
				date = date.replace(/[^0-9]+/g, '');

				if (date.length > 2)
					date = date.substring(0, 2) + '/' + date.substring(2);

				if (date.length > 5)
					date = date.substring(0, 5) + '/' + date.substring(5, 9);

				return date;
			};

			element.bind('keyup', () => {
				ctrl.$setViewValue(dateFormat(ctrl.$viewValue));
				ctrl.$render();
			});

			ctrl.$parsers.push(value => {
				if (value.length === 10) {
					var dateArray = value.split('/');

					return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]).getTime();
				}
			});

			ctrl.$formatters.push(value => {
				return $filter('date')(value, 'dd/MM/yyyy');
			});
		}
	};
});
