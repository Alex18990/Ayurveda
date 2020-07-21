let navbarIsTransparent = true;

$(window).scroll(function() {
  const offset = $(window).scrollTop();
  if (offset == 0) {
    $('#navbar').css('background', '');
    navbarIsTransparent = true;
  } else {
    if (navbarIsTransparent) {
      // const navbarColor = 'rgb(232 130 56)';
      const navbarColor = 'rgb(255, 192, 172)';
      $('#navbar').css('background', navbarColor);
      console.log('Make navbar filled');
      navbarIsTransparent = false;
    }
  }
});