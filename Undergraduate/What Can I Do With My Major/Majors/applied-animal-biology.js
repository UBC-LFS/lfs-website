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

  var mainImageBotMargin
  var sidebarHeight
  var sidebarPositionLeft
  var sidebarPositionTop
  var sidebarPositionTop2
  var scrollPostion1
  var scrollPostion2

  function checkWindowSize () {
    var windowSize = $(window).width()
    if (windowSize > 780) {
      return true
    } else {
      return false
    }
  }

  function sidebarResize () {
    if (checkWindowSize()) {
      mainImageBotMargin = $('#banner-image').outerHeight(true) - $('#banner-image').height()
      sidebarHeight = $('#nav-fixed').outerHeight()
      sidebarPositionLeft = $('#banner-image').offset().left + $('#banner-image').width() - $('#nav-fixed').outerWidth()
      sidebarPositionTop = $('#banner-image').offset().top + $('#banner-image').outerHeight(true)
      sidebarPositionTop2 = $('#ubc7-unit-footer').offset().top - mainImageBotMargin - sidebarHeight
      scrollPostion1 = $('#banner-image').offset().top + $('#banner-image').outerHeight()
      scrollPostion2 = $('#ubc7-footer').offset().top - sidebarHeight - mainImageBotMargin - mainImageBotMargin
    }
  }

  function sidebarPosition () {
    sidebarResize()
    var yScrollPos = window.pageYOffset
    console.log(yScrollPos)
    if (yScrollPos <= scrollPostion1) {
      $('#nav-fixed').css('position', 'absolute')
      $('#nav-fixed').css('top', sidebarPositionTop + 'px')
      $('#nav-fixed').css('left', sidebarPositionLeft + 'px')
    } else if (yScrollPos > scrollPostion1 && yScrollPos < scrollPostion2) {
      $('#nav-fixed').css('position', 'fixed')
      $('#nav-fixed').css('top', mainImageBotMargin + 'px')
      $('#nav-fixed').css('left', sidebarPositionLeft + 'px')
    } else if (yScrollPos >= scrollPostion2) {
      $('#nav-fixed').css('position', 'absolute')
      $('#nav-fixed').css('top', sidebarPositionTop2 + 'px')
      $('#nav-fixed').css('left', sidebarPositionLeft + 'px')
    }
  }
  sidebarPosition()

  $(window).on('scroll', sidebarPosition)
  $(window).on('resize', sidebarPosition)
})
