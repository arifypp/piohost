(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

// Extra info sidebar
$('.info-bar').on('click', function () {

    $('.extra-info').addClass('info-open');

  })



  $('.close-icon').on('click', function () {

    $('.extra-info').removeClass('info-open');

  })

// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();

  /* Search

  -------------------------------------------------------*/

  var $searchWrap = $('.search-wrap');

  var $navSearch = $('.nav-search');

  var $searchClose = $('#search-close');



  $('.search-trigger').on('click', function (e) {

    e.preventDefault();

    $searchWrap.animate({ opacity: 'toggle' }, 500);

    $navSearch.add($searchClose).addClass("open");

  });



  $('.search-close').on('click', function (e) {

    e.preventDefault();

    $searchWrap.animate({ opacity: 'toggle' }, 500);

    $navSearch.add($searchClose).removeClass("open");

  });



  function closeSearch() {

    $searchWrap.fadeOut(200);

    $navSearch.add($searchClose).removeClass("open");

  }



  $(document.body).on('click', function (e) {

    closeSearch();

  });



  $(".search-trigger, .main-search-input").on('click', function (e) {

    e.stopPropagation();

  });



// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})

// data - background

$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// Slick Slider
$('.activ-testimonai').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow:'.testimonial-prev',
	nextArrow:'.testimonial-next',
	centerMode: true,
	centerPadding: '0',
   	responsive: [
	 {
	   breakpoint: 1200,
	   settings: {
		 slidesToShow: 2,
		 slidesToScroll:1,
		 infinite: true,
		 dots: false,
		 centerMode: false,
	   }
	 },
	 {
	   breakpoint: 992,
	   settings: {
		 slidesToShow: 2,
		 slidesToScroll: 1,
		 arrows: false,
		 centerMode: false,
	   }
	 },
	 {
	   breakpoint: 767,
	   settings: {
		 slidesToShow: 1,
		 slidesToScroll: 1,
		 arrows: false,
	   }
	 }
   ]
 
 });
//  Slick slider for brand active
 $('.brand-active').slick({

	dots: false,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
		breakpoint: 1024,
		settings: {
			slidesToShow: 4,
			slidesToScroll:1,
			infinite: true,
			dots: false,
		}
		},

		{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}

		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		}
		}
	]
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

// Pricing active
$('.choose-box').on('mouseenter', function(){
	$(this).addClass('active').parent().siblings().find('.choose-box').removeClass('active');
})


})(jQuery);