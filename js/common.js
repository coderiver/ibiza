$(document).ready(function() {

//online type
$('.online__type label').click(function() {
	if ($(this).hasClass('active')) {

	}
	else {
		$('.online__type label').removeClass('active');
		$(this).addClass('active');
	}
});

//slider
$('.slider').each(function() {
	var slider_prev = $(this).next().children('.navi__prev');
	var slider_next = $(this).next().children('.navi__next');
	var slider_curr = $(this).next().children('span');
	var total = $(this).children('ul').length;
	$(this).cycle({ 
	  fx:     'scrollHorz', 
	  speed:  'fast', 
	  timeout: 0, 
	  wrap: false,
	  next:   slider_next, 
	  prev:   slider_prev,
	  after: function(curr, next, sl) {
    	var slide = sl.currSlide + 1;
    	var caption = slide + '/' + sl.slideCount;
    	$(slider_curr).html(caption);
   	}
	});
});

});