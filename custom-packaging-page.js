  // carousel http://owlcarousel2.github.io/OwlCarousel2/
    $j(document).ready(function () {

        $j(".owl-example").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 1250,
            paginationSpeed: 1250,
            transitionStyle: "fade",
            singleItem: true,
            autoPlay: false,
            stopOnHover: true,
            lazyLoad: true,
            autoHeight: true


            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });

    });