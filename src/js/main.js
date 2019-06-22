$(document).ready(function() {
  
  const dict = [
    {
      cardName: "card-1",
      defaultText: "Монтаж систем <br>отопления",
      activeText: "Здесь будет короткое описание о данной услуге"
    },
    {
      cardName: "card-2",
      defaultText: "Монтаж сантехнического<br>оборудования",
      activeText: "Здесь будет короткое описание о данной услуге"
    },
    {
      cardName: "card-3",
      defaultText: "Монтаж канализационного<br>оборудования",
      activeText: "Здесь будет короткое описание о данной услуге"
    },
    {
      cardName: "card-4",
      defaultText: "Монтаж систем <br>отопления",
      activeText: "Здесь будет короткое описание о данной услуге"
    },
    {
      cardName: "card-5",
      defaultText: "Монтаж сантехнического<br>оборудования",
      activeText: "Здесь будет короткое описание о данной услуге"
    },
    {
      cardName: "card-6",
      defaultText: "Монтаж канализационного<br>оборудования",
      activeText: "Здесь будет короткое описание о данной услуге"
    }
  ];

  /* Меню */
  $('.navbar__icon').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.navbar__list').toggleClass('navbar__list_open');
  });
  $('.navbar__link').on('click', function (event) {
    event.preventDefault();
    $(this).closest('.navbar__list')
      .removeClass('navbar__list_open');
  });

  window.onresize = function (event) {
    $('.navbar__list').removeClass('navbar__list_open');
  };

  $(document).scroll(function () {
    if ($(document).width() < 991 ) {
      if ($(document).scrollTop() > $('.navbar').height() + 10)
        $('.navbar').addClass('fixed');
      else
        $('.navbar').removeClass('fixed');
    }
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
  $('.service__button').on('click', function(event) {
    event.preventDefault();
    const target = event.target;
    const clickedCard = target.getAttribute("data-target");

    const findVal =  function (arr, clickedCard) {
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.cardName === clickedCard) return element;        
      }
    }

    const createNode = function(para, text) {
      const words = text.split('<br>');

      para.innerText = '';
      for (let index = 0; index < words.length; index++) {
        const element = words[index];
        para.appendChild(document.createTextNode(element));
        para.appendChild(document.createElement('br'));
      }
    }

    const dictValue = findVal(dict, clickedCard);

    const textElement = target.parentElement.querySelector('.service__text');

    if (target.classList.contains('service__button_active')) {
      target.classList.remove('service__button_active');
      target.classList.add('service__button');
      target.innerText = 'Узнать цену';
      createNode(textElement, dictValue.defaultText);
      textElement.classList.remove('service__text_active');
    } else {
      target.classList.add('service__button_active');
      target.classList.remove('service__button');
      target.innerText = 'от 500 р.';
      createNode(textElement, dictValue.activeText);
      textElement.classList.add('service__text_active');
    }
  });

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

/* Иницализируем отправку формы */
  const validationParams = {
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
    errorElement: "div",
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(form).serialize(),
        success: function () {
          $(form).find("input").val("");
          $('.modal').removeClass('modal_active');
          $('.modal-thanks').fadeIn();
          $("form").trigger("reset");
        }
      });
      return false;
    }
  };

  /* Валидация форм */
  $('#request-form').validate(validationParams);
  $('#modal-form').validate(validationParams);

  /* Маска для телефона */
  $('.phone').mask('+7 (999) 999-99-99');

  /* Плавная прокрутка к сециям по якорным ссылкам */
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top - $('.navbar').height() - 15
    }, 1500);
  });

  /* Прокрутка страницы вверх при помощи кнопки */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300 && $(this).width() > 768) {
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

  $('.navbar__logo').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  /* Скрипт для появления карты при прокрутке до нее */
  var target = $('.footer');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;

  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
      $('#map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad920aa478fad8781a4be5da55c1c9cdc746907b68ba93b41a4a4c07659ede650&amp;lang=ru_RU&amp;scroll=false"></script >');
      // console.log('докрутили');
      $(window).unbind('scroll');
    }
  });

  new WOW().init();

});