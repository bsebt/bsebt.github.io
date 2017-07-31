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
