/* global jQuery */
jQuery(document).ready(function ($) {
  $('.undergraduate-profile-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    swipe: true,
    arrows: true,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next'),
    responsive: [
      {
        breakpoint: 1024,
        setting: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 769,
        setting: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        setting: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  })

    // Setting up links
  function setupSlickSlider () {
    [].forEach.call($('.slider-wrap .slick-slide'), function (item, index, array) {
      var slickSliderLink = $(item).children('a').eq(0).attr('href')
      $(item).children('a').eq(1).attr('href', slickSliderLink)
    })
  }
  setupSlickSlider()

  for (let l = 0; l < $('.alert-dismissable > .close').length; l++) {
    $('.alert-dismissable > .close').click(removeAlert)
  }
  function removeAlert () {
    let dataDismissValue = $(this).attr('data-dismiss')
    $(this).parents('div.alert-dismissable.' + dataDismissValue).eq(0).remove() // removes first parent
  }

  $('#degree-button').click(function () {
    $('html, body').animate({
      scrollTop: $('#degree-requirements').offset().top
    }, 1000)
  })
  $('#career-button').click(function () {
    $('html, body').animate({
      scrollTop: $('#career-development').offset().top
    }, 1000)
  })
  $('#find-button').click(function () {
    $('html, body').animate({
      scrollTop: $('#find-resources').offset().top
    }, 1000)
  })

  function alertAppend () {
    var webAlertDisplayCheck = false    // checks if webpage has alerts
    var pageAlertCount = 0

    function pageAlertCounter () {
      var pageAlertPCount = $('p.alert-text').length
      var pageAlertText = $('p.alert-text')
      var pageAlertTextCount = 0
      var pageAlertNum = 0

      for (let k = 0; k < pageAlertPCount; k++) {
        pageAlertTextCount = $.trim(pageAlertText.eq(k).text()).length
        if (pageAlertTextCount > 0) {
          pageAlertNum++
        }
      }
      return pageAlertNum
    }
    pageAlertCount = pageAlertCounter()

    function pageAlertChecker () {
      var j = 0  // counter used to count for the page-alert boxes

      if (pageAlertCount > 0) {
        webAlertDisplayCheck = true
        // if there is more than 1 page-alert, clone the additional page alerts
        for (let i = 1; i < pageAlertCount; i++) {
          $('.website-alerts-container .page-alert').eq(0).clone().appendTo('.website-alerts-container')
        }
        // appends text to page-alert box
        // this block of code prevents bugs that could occur if user deletes alert-1 and starts at alert-2
        for (let k = 0; k < $('p.alert-text').length; k++) {
          if ($.trim($('p.alert-text').eq(k).text()).length > 0) {
            let alertText = $('p.alert-text').eq(k).text()
            $('.website-alerts-container .page-alert .website-content-text').eq(j).text(alertText)
            j++
          }
          if (j >= pageAlertCount) {
            break
          }
        }
      } else {
        $('.website-alerts-container .page-alert').remove()
      }
      $('.website-alert-texts').remove()
    }
    pageAlertChecker()

    function websiteAlertStyling () {
      if ($('.website-alert').length > 0) {
        $('.website-alerts-container').css('padding-bottom', '5px')
      }
      if (webAlertDisplayCheck === true) {
        $('.website-alerts-container').css('display', 'block')
      }
    }
    websiteAlertStyling()
  }
  alertAppend()

  $('.close').click(function () {
    $(this).parents('.website-alert').animate({height: '0px'}, function () {
      this.remove()
      if ($('.website-alert').length === 0) {
        $('.website-alerts-container').animate({padding: '0px'}, function () {
          $('.website-alerts-container').remove()
        })
      }
    })
  })

  function alertPosition () {
    var pageContentWidth = $('#main-content').width()
    var websiteAlertContainerLeft = ($('#main-content').outerWidth(true) - $('#main-content').width()) / 2

    $('.website-alerts-container').css('width', pageContentWidth + 'px')
    $('.website-alerts-container').css('left', websiteAlertContainerLeft + 'px')
  }
  alertPosition()

  function timeOutFncCall () {
    alertPosition()
  }

  $(window).on('resize', function () {
    setTimeout(timeOutFncCall, 100)
  })
})
