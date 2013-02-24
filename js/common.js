$(document).ready(function() {

//online hide-visible
$('.online__title').live('click', function() {
	if ($(this).hasClass('open')) {
		$(this).removeClass('open');
		$('.online__details').slideUp();
	}
	else {
		$(this).addClass('open');
		$('.online__details').slideDown();
	}
	return false;
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
	  fx: 'fade', 
	  speed: 'fast', 
	  timeout: 0, 
	  wrap: false,
	  next: '.hot-deals__next', 
	  prev: '.hot-deals__prev',
	  pager: '.hot-deals__navi',
	  pagerAnchorBuilder: function(index, el) {
      return '<button></button>';
     }
	});
};

if ($('.calendar').length > 0) {
	$('.calendar').cycle({ 
	  fx: 'scrollHorz', 
	  speed: 'slow', 
	  timeout: 0, 
	  wrap: false,
	  next: '.calendar-nav__next', 
	  prev: '.calendar-nav__prev'
	});
};

//masonry
if ($('.js-masonry').length > 0) {
	$('.js-masonry').masonry();
};

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

//html area
if ($('.js-html-area').length>0) {
	$('.js-html-area').htmlarea({
	    toolbar: [
		    ["bold", "italic", 
			    {
				    css: "quote",
				    text: "quote",
				    // The function to execute when the button is clicked
				    action: function(btn) {
				      this.pasteHTML("&laquo;"+this.getSelectedHTML()+"&raquo;");
			    	}
			    },
			  "link"]
			]
	});
};

//datepicker
$('.js-dp').datepicker();

//select
$('.js-select select').change(function() {
	var select_option = $(this).children(':selected').val();
	$(this).prev().html(select_option);
});

//options
$('.hl-search__options span').click(function() {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).next().slideUp();
	}
	else {
		$(this).addClass('active');
		$(this).next().slideDown();
	}	
});

//lazy load
$('.js-load-pic img').lazyload({
  effect : 'fadeIn'
});

//popup
$('.js-enter-open').click(function() {
	$('.popup-bg, .popup_enter').fadeIn();
});
$('.js-enter-close, .popup-bg').click(function() {
	$('.popup-bg, .popup_enter').fadeOut();
});
$('.js-enter-extra').click(function() {
	$('.enter__extra').slideDown();
});

//add post
$('.js-add-post').click(function() {
	$('.cm-add-post').slideDown();
});

//gallery
function js_gallery() {	
	var item_parent = $('.js-gallery');	
	var item = $('.js-gallery-items');	
	var item_prev = $('.js-gallery-prev');	
	var item_next = $('.js-gallery-next');	
	var item_pic_show = $('.js-gallery-show');
	item.children().children('img').load(function() {
		var gal_width = 0;
		item.children().children('img').each(function() {
			gal_width += $(this).width();
			return(gal_width);
		});
		item.width(gal_width);
	});
	item_next.click(function() {
		item_parent.scrollTo('+=200px', 400);
	});
	item_prev.click(function() {
		item_parent.scrollTo('-=200px', 400);
	});
	item.children('a').click(function() {		
		var item_pic_cur = $(this).attr('href');
		item_pic_show.children('img').attr('src', item_pic_cur);
		return false;
	});
}
js_gallery();

//map
function initialize() {     
    var myLatlng = new google.maps.LatLng(38.90895099999999, 1.4281150);
    var myOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

    //markers

		//marker window
		var contentString = '<div class="map-content">\
													 <div class="map-content__pic">\
													 	<a href="#"><img src="img/hotel_img/map.jpg" alt=""></a>\
													 </div>\
													 <div class="map-content__cat">\
													 	<a href="#">классика</a>\
													 </div>\
													 <div class="map-content__title">\
													 	<a href="#">Croissanteria Jesus</a>\
													 </div>\
												   <div class="rating js-rating-read" data-score="4"></div>\
												 </div>';
		var infowindow = new google.maps.InfoWindow({
		  content: contentString
		});
		var image = 'img/hotel_img/icons/marker.png';
		var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  icon: image
		});
		google.maps.event.addListener(marker, 'click', function() {
		  infowindow.open(map,marker);
		  rating();
		});
}
initialize();

});

//windows scroll
$(window).scroll(function() {

});

