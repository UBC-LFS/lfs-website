/* global jQuery */
jQuery(document).ready(function ($) {
  $('#admission-button').click(function () {
    $('html, body').animate({
      scrollTop: $('#admissions').offset().top
    }, 1000)
  })
})
