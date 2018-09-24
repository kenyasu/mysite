$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#sticky-header').show();
      $('#sticky-bar').addClass('is-fixed').slideDown();
    } else {
      $('#sticky-bar').slideUp();
    }
  });
});
