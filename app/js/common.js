$(document).ready(function() {
	//slick
	$('.content__slider-block').slick({
		dots: true,
		arrows: false,
	});
	$('.clients').slick({
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 3
	});
	$('.prof').slick({
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});

	//menu
	$( ".menu-trigger" ).click(function() {
		$( ".menu" ).addClass( "active" );
		$( ".menu__overlay" ).addClass( "active" );
	});
	$( ".menu__overlay" ).click(function() {
		$( ".menu" ).removeClass( "active" );
		$(this).removeClass( "active" );
	});

});