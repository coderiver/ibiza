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

});