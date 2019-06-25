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
		slidesToShow: 4,
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

	//map
	$('.map')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

	/* - - - - - - - - - - - - - -   valid  - - - - - - - - - - - - - - - - */
	$(".phone-input").mask("+38(099)999-99-99");

	$('.send_button').click(function(){
		var parentClass=$(this).attr('rel');
		
		   validate=1;
		   validate_msg='';
		   form=$('#'+$(this).attr('rel'));
			jQuery.each(form.find('.validate'), function(key, value) {
			   if($(this).val()==''){
				   validate_msg+=$(this).attr('title')+'\n';validate=0;
				   $(this).focus();
				   $(this).addClass('red_input');
			   }else{
				   $(this).removeClass('red_input');
			   }
		   });
		   if(validate==1){
			   $.ajax({
				   url: 'ajax.php',
				   data: 'action=send_form&'+form.serialize(),
				   success: function(data){
						$.fancybox.open(
							{
								src  : '#modal-thank',
								type  : 'inline',
								opts : {
									afterShow : function( instance, current ) {
										console.info( 'done!' );
									}
								}
							}
						);
					   $('.validate').val('');
				   }
			   });
			   
		   }else{
			   /*alert(validate_msg);*/
		   } 
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

//lazyload
document.addEventListener("DOMContentLoaded", function() {
	let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	let active = false;
  
	const lazyLoad = function() {
	  if (active === false) {
		active = true;
  
		setTimeout(function() {
		  lazyImages.forEach(function(lazyImage) {
			if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
			  lazyImage.src = lazyImage.dataset.src;
			  lazyImage.classList.remove("lazy");
  
			  lazyImages = lazyImages.filter(function(image) {
				return image !== lazyImage;
			  });
  
			  if (lazyImages.length === 0) {
				document.removeEventListener("scroll", lazyLoad);
				window.removeEventListener("resize", lazyLoad);
				window.removeEventListener("orientationchange", lazyLoad);
			  }
			}
		  });
  
		  active = false;
		}, 200);
	  }
	};
  
	document.addEventListener("scroll", lazyLoad);
	window.addEventListener("resize", lazyLoad);
	window.addEventListener("orientationchange", lazyLoad);
  });

// LAZY LOAD FUNCTION
function lazyLoad() {
	$('iframe').each(function() {
	  var frame = $(this),
		  vidSource = $(frame).attr('data-src'),
		  distance = $(frame).offset().top - $(window).scrollTop(),
		  distTopBot = window.innerHeight - distance,
		  distBotTop = distance + $(frame).height();
  
	  if (distTopBot >= 0 && distBotTop >= 0) { // if frame is partly in view
		$(frame).attr('src', vidSource);
		$(frame).removeAttr('data-src');
	  }
	});
  }
  var throttled = _.throttle(lazyLoad, 100);
  $(window).scroll(throttled);
  
  