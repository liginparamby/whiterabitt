$(window).scroll(function(){
    if ($(this).scrollTop() > 1000) {
       $('header').addClass('sticky');
    } else {
       $('header').removeClass('sticky');
    }
  });