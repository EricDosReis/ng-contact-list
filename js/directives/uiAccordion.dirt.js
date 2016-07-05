angular.module('ui.accordion', []);

angular.module('ui.accordion').run(function($templateCache) {
	$templateCache.put('view/uiAccordion.html', '<p class="alert alert-danger text--center">{{ title }} <br>{{ message }}</p>');
});

angular.module('ui.accordion').directive('uiAccordion', function() {
	return {
		templateUrl: 'js/directives/uiAccordion.html/uiAccordion.html',
		restrict: 'E',
		scope: {
			title: '@',
			message: '='
		}
	};
});
