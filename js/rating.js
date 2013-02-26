$(document).ready(function() {
	
//rating
function rating() {
	if ($('.js-rating-read').length > 0) {
		$('.js-rating-read').raty({
			readOnly: true,
			space: false,
			number: 5,
	  	starOff: 'img/index_img/star-off.png',
	  	starOn : 'img/index_img/star-on.png',
	  	score: function() {
	    	return $(this).attr('data-score');
	 		}
		});
	};
	if ($('.js-rating-choice').length > 0) {
		$('.js-rating-choice').raty({
			space: false,
			number: 5,
	  	starOff: 'img/index_img/star-off.png',
	  	starOn : 'img/index_img/star-on.png'
		});
	};
}
rating();

});