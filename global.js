jQuery(document).ready(function ($) {
  var appendApplyToUBCGlobally = function () {
    $('#ubc7-unit .container').prepend('<a class="apply-now-button" href="https://account.you.ubc.ca/ubc/apply/apply_now.ezc"><span>Apply to UBC</span> </a>')
    $('#ubc7-unit-navigation #menu-top-nav').append('<li class="apply-button menu-item menu-item-type-post_type menu-item-object-page"><a href="https://account.you.ubc.ca/ubc/apply/apply_now.ezc">Apply to UBC</a></li>')
  }
  appendApplyToUBCGlobally()
})

// need to write code that will append the survey to every single page
