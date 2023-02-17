
$(window).on('load', function () {
    setTimeout(function () { 
        $('.page-loader').fadeOut('slow');
        $('body').removeClass('overflow-hidden');
    }, 1000);
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 80) {
        $("nav.navbar").removeClass("nav-active");
    } else {
        $("nav.navbar").addClass("nav-active");
    }
});



// AOS
AOS.init();



// active header for other pages
if (!$(".hero-section").length) {
    $('nav.navbar').addClass('always-nav-active');
};


    // glightbox
    if ($("[page-name=blogcategirues]").length) {
    var lightboxInlineIframe = GLightbox({
        selector: '.glightbox'
    });
}

if ($("[page-name=gallerySection]").length) {
    var lightboxInlineIframe = GLightbox({
        selector: '.glightbox1'
    });
}

if ($("[page-name=projects]").length) {
    var lightboxInlineIframe = GLightbox({
        selector: '.glightbox2'
    });
}

if ($("[page-name=mainLandingPage]").length) {
    $('.example').owlCarousel({
        loop: true,
        items: 3,
        padding: 0,
        margin: 0,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        freeDrag: false,
        lazyLoad: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            500: {
                items: 1,
                nav: false,
                dots: false
            },
            600: {
                items: 1,
                nav: false,
                dots: true
            },
            992: {
                items: 1,
                nav: false,
                dots: true
            },
            1299: {
                items: 1,
                nav: false,
                dots: true
            },
            1499: {
                items: 1,
                nav: false,
                dots: true
            }
        },
    });


    $('.owlCard').owlCarousel({
        loop: true,
        items: 6,
        padding: 0,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        freeDrag: false,
        lazyLoad: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        navigation: true,
        responsiveClass: true,
        navText: ["<img src='assets/img/icons/owlleftarrow.svg'>","<img src='assets/img/icons/owlrightarrow.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1299: {
                items: 3
            }
        },
    });
}
if ($("[page-name=aboutusPage],[page-name=servicesPage]").length) {
    $('.owlCard').owlCarousel({
        loop: true,
        items: 6,
        padding: 0,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        freeDrag: false,
        lazyLoad: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        navigation: true,
        responsiveClass: true,
        navText: ["<img src='assets/img/icons/owlleftarrow.svg'>","<img src='assets/img/icons/owlrightarrow.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1299: {
                items: 3
            }
        },
    });
}


(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
})()
