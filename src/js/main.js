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

  /* Вызов модального окна */
  $('#button').on('click', function (event) {
    event.preventDefault();
    $('.modal').addClass('modal_active');
  })

  $('#close').on('click', function (event) {
    event.preventDefault();
    $('.modal').removeClass('modal_active');
  });

  $('#thanks-close').on('click', function (event) {
    event.preventDefault();
    $('.modal-thanks').fadeOut();
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

  $('.hero-slider').owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });

  $('.feedback-slider').owlCarousel({
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      },
    }
  });

  /* Валидация форм */
  $('#request-form').validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      user_phone: "required"
    },
    messages: {
      user_name: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Не менее {0} символов!"),
        maxlength: jQuery.validator.format("Не более {0} символов!")
      },
      user_phone: "Заполните поле"
    },
    errorClass: "invalid",
    errorElement: "div"  
  });

  $('#modal-form').validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      user_phone: "required"
    },
    messages: {
      user_name: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Не менее {0} символов!"),
        maxlength: jQuery.validator.format("Не более {0} символов!")
      },
      user_phone: "Заполните поле"
    },
    errorClass: "invalid",
    errorElement: "div"
  });

  /* Маска для телефона */
  $('.phone').mask('+7 (999) 999-99-99');

  /* Иницализируем отправку формы */
  $('form').submit(function (event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      // alert("Ваша заявка принята");
      $('.modal').fadeOut();
      $('.modal-thanks').fadeIn();
      $("form").trigger("reset");
    });
    return false;
  });

  /* Плавная прокрутка к сециям по якорным ссылкам */
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  /* Прокрутка страницы вверх при помощи кнопки */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100 && $(this).width() > 768) {
      $('.scroll_up').fadeIn();
    } else {
      $('.scroll_up').fadeOut();
    }
  });

  $('.scroll_up').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  new WOW().init();

});