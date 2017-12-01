/* global jQuery */
jQuery(document).ready(function ($) {
  $('#link-1').click(function () {
    $('html, body').animate({
      scrollTop: $('#get-experience-at-ubc').offset().top
    }, 800)
  })
  $('#link-2').click(function () {
    $('html, body').animate({
      scrollTop: $('#using-your-applied-animal-biology-degree').offset().top
    }, 800)
  })
  $('#link-3').click(function () {
    $('html, body').animate({
      scrollTop: $('#career-possibilities').offset().top
    }, 800)
  })
  $('#link-4').click(function () {
    $('html, body').animate({
      scrollTop: $('#academic-possibilities').offset().top
    }, 800)
  })
  $('#link-5').click(function () {
    $('html, body').animate({
      scrollTop: $('#alumni-profiles').offset().top
    }, 800)
  })
  $('#link-6').click(function () {
    $('html, body').animate({
      scrollTop: $('#resources').offset().top
    }, 800)
  })
  $('#link-last').click(function () {
    $('html, body').animate({
      scrollTop: $('body').offset().top
    }, 800)
  })

  var mainImageWidth
  var mainImageLeftOffset
  var main_image_bot_margin
  var sidebar_width
  var sidebar_height
  var sidebar_position_left
  var sidebar_position_top
  var sidebar_position_top2
  var scroll_position1
  var scroll_position2

  function check_window_size () {
    var window_size = $(window).width()
    if (window_size > 780) {
      return true
    } else {
      return false
    }
  }

  function sidebar_resize () {
    if (check_window_size()) {
      var mainImageWidth = $('#banner-image').width()
      var mainImageLeftOffset = $('#banner-image').offset().left
      var main_image_bot_margin = $('#banner-image').outerHeight(true) - $('#banner-image').height()
      var sidebar_width = $('#nav-fixed').outerWidth()
      var sidebar_height = $('#nav-fixed').outerHeight()
      var sidebar_position_left = $('#banner-image').offset().left + $('#banner-image').width() - $('#nav-fixed').outerWidth()
      var sidebar_position_top = $('#banner-image').offset().top + $('#banner-image').outerHeight(true)
      var sidebar_position_top2 = $('#ubc7-unit-footer').offset().top - main_image_bot_margin - sidebar_height
      var scroll_position1 = $('#banner-image').offset().top + $('#banner-image').outerHeight()
      var scroll_position2 = $('#ubc7-footer').offset().top - sidebar_height - main_image_bot_margin - main_image_bot_margin
    }
  }

  function sidebar_position () {
    sidebar_resize()
    var y_scroll_pos = window.pageYOffset
    console.log(y_scroll_pos)
    if (y_scroll_pos <= scroll_position1) {
      $('#nav-fixed').css('position', 'absolute')
      $('#nav-fixed').css('top', sidebar_position_top + 'px')
      $('#nav-fixed').css('left', sidebar_position_left + 'px')
    } else if (y_scroll_pos > scroll_position1 && y_scroll_pos < scroll_position2) {
      $('#nav-fixed').css('position', 'fixed')
      $('#nav-fixed').css('top', main_image_bot_margin + 'px')
      $('#nav-fixed').css('left', sidebar_position_left + 'px')
    } else if (y_scroll_pos >= scroll_position2) {
      $('#nav-fixed').css('position', 'absolute')
      $('#nav-fixed').css('top', sidebar_position_top2 + 'px')
      $('#nav-fixed').css('left', sidebar_position_left + 'px')
    }
  }
  sidebar_position()

  $(window).on('scroll', sidebar_position)
  $(window).on('resize', sidebar_position)
})
