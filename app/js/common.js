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
		slidesToScroll: 3,
		responsive: [
			
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},
			{
			breakpoint: 680,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.prof').slick({
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			
			{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},
			{
			breakpoint: 680,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	//menu
	// $( ".menu-trigger" ).click(function() {
	// 	$( ".menu" ).addClass( "active" );
	// 	$( ".menu__overlay" ).addClass( "active" );
	// });
	// $( ".menu__overlay" ).click(function() {
	// 	$( ".menu" ).removeClass( "active" );
	// 	$(this).removeClass( "active" );
	// });

	//fancybox
	$('.close-modal').click(function(){
	$.fancybox.close();
	});

	//scroll anchor
    $('.menu li a').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-1},800);
		$( body ).removeClass( "show-menu" );
		return false;
	});

});

(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.wrapper' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false,

		morphEl = document.getElementById( 'morph-shape' ),
		s = Snap( morphEl.querySelector( 'svg' ) );
		path = s.select( 'path' );
		initialPath = this.path.attr('d'),
		pathOpen = morphEl.getAttribute( 'data-morph-open' ),
		isAnimating = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isAnimating ) return false;
		isAnimating = true;
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
			// animate path
			setTimeout( function() {
				// reset path
				path.attr( 'd', initialPath );
				isAnimating = false; 
			}, 300 );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			// animate path
			path.animate( { 'path' : pathOpen }, 400, mina.easeinout, function() { isAnimating = false; } );
		}
		isOpen = !isOpen;
	}

	init();

})();

//wow
new WOW().init();