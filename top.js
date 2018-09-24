$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('#sticky-header').addClass('is-fixed');
    } else {
      $('#sticky-header').removeClass('is-fixed');
    }
  });
});
