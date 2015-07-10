app.filter('wordCount', function () {
	'use strict';
	return function (value) {
		if (value && (typeof value === 'string')) {
			return value.trim().split(/\s+/).length;
		} else {
			return 0;
		}
	};
});
