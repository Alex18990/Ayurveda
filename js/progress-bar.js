// When the user scrolls the page, execute myFunction 

$(window).scroll(function() {
  const bottomOffset = 800;
  const offset = $(window).scrollTop();
  const height = $(document).height() - bottomOffset;
  const scrolledPercentage = Math.min(100, (offset / height) * 100);
  $('#progress-bar-custom').css('width', scrolledPercentage + '%');

  if (offset == 0) {
    $('#progress-container').hide();
  } else {
    $('#progress-container').show();
  }
});
