$(document).ready(function() {
  
  $('.navbar__icon').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.navbar__list').toggleClass('navbar__list_open');
  });
  $('.navbar__link').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.navbar__list')
      .removeClass('navbar__list_open');
  });

  /* Настройка Slick Slider */
  /* $('.hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    // appendDots: $('.slick-dots'),
    dotsClass: $('.hero__dot')
  }); */

  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });

});