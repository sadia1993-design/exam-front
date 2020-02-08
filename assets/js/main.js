(function($) {
    "use strict";

    jQuery(document).ready(function($) {
        $('.testimonial-active').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            loop: true,
            dots: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
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
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });

    // wow animation
    new WOW().init();


    jQuery(window).load(function() {

    });
}(jQuery));