$(function () {
  if(window.matchMedia('(min-width: 1025px)').matches){
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('#sticky-header').show();
        $('#sticky-bar').addClass('is-fixed').slideDown();
      } else {
        $('#sticky-bar').slideUp();
      }
    });
  }

  var pagetop = $('#back-icon');
    $(window).scroll(function(){
      if ($(this).scrollTop() > 700) {
        pagetop.fadeIn();
      }else{
        pagetop.fadeOut();
      }
    });
    pagetop.click(function(){
      $('body, html').animate({scrollTop:0}, 500);
        return false;
    });

  $('.nav-content .suki-side > a').hover(
    function(){
      $(this).next('ul').slideToggle();
    }, function(){
      $(this).next('ul').slideUp();
    })
});
