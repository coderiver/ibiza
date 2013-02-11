$(document).ready(function() {

//main pic
function main_pic() {
	var wnd_height = $(window).height();
	if (wnd_height > 650 && wnd_height < 793) {
		$('.main .container').height(wnd_height - 93);
	};
}
main_pic();

//online hide-visible
$('.can-open').live('click', function() {
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
		$('.online').slideUp();
	}
	else {
		$(this).addClass('open');
		$('.online').slideDown();
	}
});

//windows resize
$(window).resize(function() {
  main_pic();
});

//online type
$('.online__type label').click(function() {
	if ($(this).hasClass('active')) {}
	else {
		$('.online__type label').removeClass('active');
		$(this).addClass('active');
	}
});

//slider gengeral
if ($('.slider').length > 0) {
	$('.slider').each(function() {
		var slider_prev = $(this).next().children('.js-navi-prev');
		var slider_next = $(this).next().children('.js-navi-next');
		var slider_curr = $(this).next().children('span');
		var total = $(this).children().length;
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
};

//slider main
if ($('.hot-deals__slider').length > 0) {
	$('.hot-deals__slider').cycle({ 
	  fx:     'fade', 
	  speed:  'fast', 
	  timeout: 0, 
	  wrap: false,
	  next: '.hot-deals__next', 
	  prev: '.hot-deals__prev'
	});
};

//slider middle
function slider_middle() {
	if ($('.navi_column').length > 0) {
		$('.navi_column .js-navi-prev, .navi_column .navi__curr').addClass('disabled');
		var col_width = $('.column__anchor').position().left + 640;	
		var col_total = (col_width - 640)/640;
		var col_total  = Math.ceil(col_total);	
		$('.navi__total').html(col_total);
		var col_width = $('.column__anchor').position().left + 640;		
		$('.column').width(col_width);
		//slider middle prev
		$('.navi_column .js-navi-prev').click(function() {
			$('.navi_column .js-navi-next, .navi_column .navi__total').removeClass('disabled');
			var col_curr = $('.navi_column .navi__curr').text();
			var col_curr = parseInt(col_curr);
			if (col_curr !== 1) {
				var col_curr = col_curr-1;
				$('.navi_column .navi__curr').html(col_curr);
				$('.column-wrap').scrollTo('-=641px', 300);
			};
			if (col_curr == 1) {
				$('.navi__curr').addClass('disabled');
				$('.navi_column .js-navi-prev').addClass('disabled');
			};
		});
		//slider middle next
		$('.navi_column .js-navi-next').click(function() {
			$('.navi_column .js-navi-prev, .navi_column .navi__curr').removeClass('disabled');		
			var col_curr = $('.navi_column .navi__curr').text();
			var col_curr = parseInt(col_curr);
			if (col_curr !== col_total) {	
				var col_curr = col_curr+1;
				$('.navi_column .navi__curr').html(col_curr);
				$('.column-wrap').scrollTo('+=641px', 300);
			};
			if (col_curr == col_total) {
				$('.navi_column .navi__total').addClass('disabled');
				$('.navi_column .js-navi-next').addClass('disabled');
			}
		});
	};
}
slider_middle();

//datepicker
$('.js-dp').datepicker();

//select
$('.select__value select').change(function() {
	var select_option = $(this).children(':selected').val();
	$(this).prev().html(select_option);
});

//cycle
if ($('.hl-slider').length > 0) {
	$('.hl-slider').cycle({ 
	  fx:     'scrollHorz', 
		speed:  'fast', 
		timeout: 0, 
		wrap: false,
	  next: '.hl-slider__next', 
	  prev: '.hl-slider__prev'
	});
};

});

//windows scroll
$(window).scroll(function() {
    //online    
	if ($('.online').length > 0) {
		if ($('body').scrollTop() > 400) {
			$('.online-title').addClass('can-open');
			$('.online').addClass('online_fixed');
			$('.online').removeClass('online_abs');
		}
		else {
			$('.online-title').removeClass('can-open');			
			$('.online').removeClass('online_fixed');	
			$('.online').addClass('online_abs');		
		};
	};
});

