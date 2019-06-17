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

  /* Секция Услуги */
  // $('.service__button').on('click', function(event) {
  //   event.preventDefault();
  //   // $('.service__text_active').fadeIn();
  //   // $('.service__text').fadeOut();
  //   // $('.service__card-1 .service__text').replaceWith('<p class="service__text_active">Здесь будет короткое описание <br>о данной услуге</p>');
  //   $('.service__card-1 .service__text').toggleClass('service__text_active');
  //   $('.service__text_active').html('Здесь будет короткое описание <br>о данной услуге');
  // });

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
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });

});