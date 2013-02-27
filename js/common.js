$(document).ready(function() {

//radio
function radio_scroll() {
	var radio_el = $('.js-radio');
	var radio_next = "Armin Van Buuren - ASOT 315";
	var radio_prev = "Scillet - Hero";
	radio_el.bind('mousewheel', function(event, delta) {
		if (delta < 0) {
			radio_el.children('span').html(radio_next);
		}
		else {
			radio_el.children('span').html(radio_prev);
		}
		return false;
	});
}
radio_scroll();

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

  var $container = $('.js-masonry');
  $container.masonry({isAnimated: true});  
  var $boxes = $('<li class="ev-item">\
										<div class="ev-item__pic">\
											<a href="#"><img src="img/events_img/pic1.jpg" alt=""></a>\
										</div>\
										<div class="ev-item__cat">\
											<a href="#">вечеринка</a>\
										</div>\
										<div class="ev-item__title">\
											<a href="#">PENNAYA PARTY VUMATE</a>\
										</div>\
										<div class="ev-item__persons">DJ Nujdin</div>\
										<div class="ev-item__place">\
											<a href="#">BARBARABAR</a>\
										</div>\
										<div class="ev-item__style">DnB, Dubstep, Electro</div>\
										<div class="ev-item__detail">\
											<a class="ev-item__comm" href="#">33<i></i></a>\
											<a class="ev-item__like" href="#">33<i></i></a>\
										</div>\
										<div class="ev-item__go">\
											<strong>157</strong>\
											<a href="#"><span>Я пойду</span></a>\
										</div>\
									</li>');
  $('.js-masonry-add').click(function(){
  	if (!$(this).hasClass('no-active')) {
    	$(this).parent().next().append($boxes).masonry('appended', $boxes);
    	$(this).addClass('no-active');
    }
  });
  
};

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
	var item_show = $('.js-gallery-show');	
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
	function hover_scrollto_next() {
		item_parent.scrollTo('+=200px', 400);
	}
	function hover_scrollto_prev() {
		item_parent.scrollTo('-=200px', 400);
	}
	item_next.hover(function() {
		hover_scrollto_next();
		item_set_next = setInterval(hover_scrollto_next, 400);
	},function() {
		clearInterval(item_set_next);
	});
	item_prev.hover(function() {
		hover_scrollto_prev();
		item_set_prev = setInterval(hover_scrollto_prev, 400);
	},function() {
		clearInterval(item_set_prev);
	});
	item_show.children().children('a').click(function() {		
		var item_pic_cur = $(this).attr('href');
		item_pic_show.children('img').attr('src', item_pic_cur);
		return false;
	});
}
js_gallery();

//map
if ($('#map_canvas').length > 0) {
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
};

//checkbox
if ($('.js-checkbox').length > 0) {
	$('.js-checkbox input').change(function() {
		if ($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
		}
		else {
			$(this).parent().addClass('active');
		}
	});
};

//tabs
$('.js-tabs-item:gt(0)').hide();
$('.js-tabs li').click(function() {
	if (!$(this).hasClass('active')) {
		$('.js-tabs li').removeClass('active');
		$(this).addClass('active');
		var item = $(this).attr('data-item');
		$('.js-tabs-item').slideUp();
		$('#' + item).slideDown();
	};
});

//events filter
$('.js-events-filter').click(function() {
	$(this).next().fadeIn();
});
$('.js-filter-close').click(function() {
	$(this).parent().fadeOut();
});

});

//windows scroll
$(window).scroll(function() {

});

