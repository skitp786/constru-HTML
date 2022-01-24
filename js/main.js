(function ($) {
  "use strict";

  $(".hero_owl__carousel").owlCarousel({
    items: 1,
    merge: true,
    autoplay: true,
    loop: true,
    video: true,
    lazyLoad: true,
    autoplayTimeout: 10000,
    center: true,
    animateIn: "slideIn",
  });

  $(".single_project__gallery ").owlCarousel({
    items: 1,
  });
  $(".team_carousel_slide").owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    lazyLoad: true,
    autoplayTimeout: 3000,
  });

  $(".testimonial_slide").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    lazyLoad: true,
    autoplayTimeout: 4000,
  });

  $(".clients_slide").owlCarousel({
    items: 6,
    autoplay: true,
    loop: true,
    lazyLoad: true,
    autoplayTimeout: 6000,
  });

  $(".gallery_slide").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    lazyLoad: true,
    autoplayTimeout: 6000,
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  $(".grid").imagesLoaded(function () {
    // init Isotope
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: ".grid-item",
      },
    });
  });

  // filter items on button click
  $(".portfolio-menu").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $(".portfolio-menu button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
})(jQuery);
