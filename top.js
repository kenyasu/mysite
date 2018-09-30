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

  $('.fa-search').click(function(){
    $(this).css('display','none');
    $(this).next('span').addClass('cancel-search');
    $('.search-window').slideDown();
  })

  $('.fa-times').click(function(){
    $(this).removeClass('cancel-search');
    $('.fa-search').css('display','inline-block');
    $('.search-window').slideUp();
  })
});
