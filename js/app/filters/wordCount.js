app.filter('wordCount', function () {
	'use strict';
	return function (value) {
		if (value && (typeof value === 'string')) {
			return value.split(/\s+/).filter(
				// only count words containing
				// at least one alphanumeric character
				function(value) {
					return value.search(/[A-Za-z0-9]/) !== -1;
				}
			).length;
		} else {
			return 0;
		}
	};
});
