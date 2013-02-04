$(document).ready(function() {

//select
$('.popup__select span').click(function() {
	$(this).next().slideDown(200);
});
$('.popup__select li').click(function() {
	var sel_val = $(this).text();
	$(this).parent().prev().html(sel_val+'<i></i>');
	$(this).parent().slideUp(200);
});

//go-top
$('.go-top').click(function() {
	$('body').scrollTo(0, 600);
});

});