function initJS() {
	'use strict';
	console.log('blast off!');
	$('nav#menu').mmenu();
	$('.typeahead').typeahead({
		prefetch: 'scripts/data_terms.json',
		limit: 10
	});
    $('.tt-query').focus();
}

$(document).ready(function(){
	'use strict';
	initJS();
});