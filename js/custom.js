/* ----------------------------------------------------------------

[ Custom settings ]

00. Preloader
01. ScrollIt
02. Navbar scrolling background
03. Close navbar-collapse when a  clicked
04. Sections background image from data background 
05. Animations
06. YouTubePopUp
07. Testimonials owlCarousel
08. Clients owlCarousel
09. Services owlCarousel
10. Team owlCarousel
11. MagnificPopup (Image, Youtube, Vimeo and custom popup)
12. Scroll back to top
13. Slider
14. Accordion Box
15. Contact Form

------------------------------------------------------------------- */

$(function() {
    "use strict";
    
    // Preloader
	$("#preloader").fadeOut(600);
	$(".preloader-bg").delay(500).fadeOut(600);
	var wind = $(window);
    
    var wind = $(window);
    // ScrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });
    
    // Navbar scrolling background
    wind.on("scroll",function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }else{
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }
    });
    
    // Close navbar-collapse when a  clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    
    //  YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 3
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 4
            }
        }
    });
    
    // Services owlCarousel
    $('.services .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , nav: false
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 1
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
                , dots: false
            }
        }
    });
    
    // MagnificPopup - Original Initialization (Keep this if needed for videos/other popups)
    $(".img-zoom-original").magnificPopup({ // Renamed original selector slightly if needed, or remove if not used elsewhere
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    });
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });
    
    // --- NEW DYNAMIC GALLERY POPUP ---
    $('#gallery').on('click', '.gallery-trigger', function(e) {
        e.preventDefault(); // Prevent default link behavior

        var $trigger = $(this); // The clicked <a> tag

        // --- गैलरी आइटम डेटा प्राप्त करें ---
        var mainImage = $trigger.data('main-image');
        var otherImagesRaw = $trigger.data('other-images');
        var title = $trigger.data('title') || ''; // Default to empty string if not set
        var description = $trigger.data('description') || '';
        var occasion = $trigger.data('occasion') || '';
        var products = $trigger.data('products') || '';

        // --- गैलरी आइटम ऐरे बनाएं ---
        var itemsArray = [];

        // Add the main image first
        if (mainImage) {
            itemsArray.push({
                src: mainImage,
                title: title // Main title for the first image
                // We'll add details via callbacks
            });
        }

        // Add other images
        if (otherImagesRaw) {
            var otherImages = otherImagesRaw.split(',');
            otherImages.forEach(function(imgSrc) {
                if (imgSrc) { // Ensure not empty string
                    itemsArray.push({
                        src: imgSrc.trim(), // Trim whitespace
                        title: title // Use main title for all images in this set, or customize
                    });
                }
            });
        }

        // --- यदि कोई आइटम नहीं है तो बाहर निकलें ---
        if (itemsArray.length === 0) {
            console.error("Magnific Popup: No images found for this gallery trigger.");
            return;
        }

        // --- Magnific Popup खोलें ---
        $.magnificPopup.open({
            items: itemsArray,
            type: 'image',
            mainClass: 'mfp-with-zoom mfp-img-mobile mfp-gallery-custom', // Added custom class
            closeOnContentClick: false, // Keep popup open on image click
            closeBtnInside: false,
            image: {
                verticalFit: true,
                titleSrc: function(item) {
                    // Use the title defined in the itemsArray
                    return item.title || '';
                }
            },
            gallery: {
                enabled: true // Enable navigation between images *in this set*
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function() {
                    // Opener is the image inside the clicked trigger link
                    return $trigger.find('img');
                }
            },
            // --- विस्तृत जानकारी के लिए कस्टम मार्कअप ---
            markup: '<div class="mfp-figure">'+
                        '<div class="mfp-close"></div>'+
                        '<div class="mfp-img"></div>'+
                        '<div class="mfp-bottom-bar">'+
                          '<div class="mfp-title"></div>'+
                          '<div class="mfp-counter"></div>'+ // Counter moved up
                          '<div class="mfp-details-section">'+ // New section for details
                             '<div class="mfp-description"></div>'+
                             '<div class="mfp-occasion"></div>'+
                             '<div class="mfp-products"></div>'+
                          '</div>' +
                        '</div>'+
                      '</div>',
            // --- कॉलबैक विवरण पॉप्युलेट करने के लिए ---
            callbacks: {
                elementParse: function(item) {
                    // This might not be needed as we populate in 'change'/'open'
                },
                open: function() {
                    // Populate details when popup opens (for the first item)
                    var wrap = this.wrap; // Get the popup wrapper
                    wrap.find('.mfp-description').text(description);
                    if(occasion) wrap.find('.mfp-occasion').html('<strong>Occasion:</strong> ' + occasion);
                    if(products) wrap.find('.mfp-products').html('<strong>Products Used:</strong> ' + products);
                },
                change: function() {
                    // Populate details when changing items
                    // NOTE: Since details are tied to the LOOK, not the individual image,
                    // we always display the details from the initial trigger.
                    var wrap = this.wrap;
                    wrap.find('.mfp-description').text(description);
                     if(occasion) wrap.find('.mfp-occasion').html('<strong>Occasion:</strong> ' + occasion);
                     else wrap.find('.mfp-occasion').empty(); // Clear if no occasion

                     if(products) wrap.find('.mfp-products').html('<strong>Products Used:</strong> ' + products);
                     else wrap.find('.mfp-products').empty(); // Clear if no products
                }
            }
        }); // End $.magnificPopup.open
    });
    // --- END NEW DYNAMIC GALLERY POPUP ---
    
    //  Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
    
    // Slider 
    $(document).ready(function() {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500,
         nav: false,
         navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    // Slider-fade owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500,
        animateOut: 'fadeOut',
        nav: false,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h4').removeClass('animated fadeInUp');
        $('h1').removeClass('animated fadeInUp');
        $('p').removeClass('animated fadeInUp');
        $('.butn-dark').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn-dark').addClass('animated fadeInUp');
    });
});
    
    // Accordion Box
    if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).next(".acc-content").is(":visible")) {
        //return false;
        $(this).removeClass("active");
        $(this).next(".acc-content").slideUp(300);
        $(outerBox).children(".accordion").removeClass("active-block");
      } else {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc-content").slideDown(300);
      }
    });
  }

});

// Contact Form
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    // success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992) { // Mobile and tablet view (Bootstrap lg breakpoint)
                // Collapse the menu if it's open
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click(); // Collapse the menu
                }

                // Ensure the navbar remains visible
                navbar.classList.remove('mobile-hidden');
            }
        });
    });
});

// FAQ Interactive Functionality - Simplified
$(document).ready(function() {
    // Toggle FAQ items
    $('.faq-card-header').on('click', function() {
        let $card = $(this).closest('.faq-card');
        
        if ($card.hasClass('active')) {
            $card.removeClass('active');
        } else {
            $('.faq-card').removeClass('active'); // Close all other cards
            $card.addClass('active');
        }
    });
    
    // Initialize - show first FAQ item as active
    $('.faq-card:first-child').addClass('active');
});
