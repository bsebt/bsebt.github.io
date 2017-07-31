if (window.width < 500) {
  $("#padzero").addclass("marginzero paddingzero")
}
// Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown-menu').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown-menu').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });


  var $logo = $('body');
  $(document).scroll(function() {
      $logo.css({display: $(this).scrollTop() > 100? $logo.css("background: url(../img/showOff1.jpg) no-repeat top center fixed;"):$logo.css("background: url(../img/DSC05035.jpg) no-repeat top center fixed;")});
  });
