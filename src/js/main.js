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

});