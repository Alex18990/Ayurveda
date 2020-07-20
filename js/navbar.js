let navbarIsTransparent = true;

$(window).scroll(function() {
  const offset = $(window).scrollTop();
  if (offset == 0) {
    $('#navbar').css('background', '');
    navbarIsTransparent = true;
  } else {
    if (navbarIsTransparent) {
      $('#navbar').css('background', 'rgb(232 130 56)');
      console.log('Make navbar filled');
      navbarIsTransparent = false;
    }
  }
});