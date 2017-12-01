/* global jQuery */
jQuery(document).ready(function ($) {
  $('.prospective-profile-slider').slick({
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

  var url = $('#news-url').text()
  $('#news-url').empty()
  $('#news-url').attr('href', url)
  $('#news-1').wrapAll($('#news-url'))

  $('.news-slider').slick({
    arrows: true,
    prevArrow: $('.news-prev'),
    nextArrow: $('.news-next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    fade: true,
    asNavFor: '.thumbnail-nav-dots'
  })

  $('.thumbnail-nav-container-box').slick({
    slidesToShow: 6,
    focusOnSelect: true,
    vertical: true,
    asNavFor: '.news-slider'
  })

  $('.thumbnail-nav-dots').slick({
    arrows: false,
    slidesToShow: 6,
    focusOnSelect: true,
    asNavFor: '.news-slider'
  })

  $('.events').slick({
    slide: 'li',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.event-prev'),
    nextArrow: $('.event-next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  })

  // add links to profile
  function setupSlickSlider () {
    // Setting up links
    [].forEach.call($('.slider-wrap .slick-slide'), function (item, index, array) {
      var slickSliderLink = $(item).children('a').eq(0).attr('href')
      $(item).children('a').eq(1).attr('href', slickSliderLink)
    })
  }
  setupSlickSlider()

  function addLinksToNews () {
    var newsCount = $('#home-news .news-container').length
    for (var index = 0; index < newsCount; index++) {
      var newsLink = $('#home-news .news-container:nth-of-type(' + (index + 1).toString() + ') a:nth-of-type(1)').attr('href')

      $('#home-news .news-container:nth-of-type(' + (index + 1).toString() + ') a.news_title').attr('href', newsLink)
      $('#home-news .news-container:nth-of-type(' + (index + 1).toString() + ') div.image-wrapper a').attr('href', newsLink)
    }
  }
  addLinksToNews()

  function elementDisplay () {
    $('.profile-control p.profile-arrow').css('display', 'block')
  }
  elementDisplay()

  function slickProfileControl () {
    var slideProfileHeight = $('#profile_slider').height()
    $('#profile_slider_prev').css('height', slideProfileHeight + 'px')
    $('#profile_slider_next').css('height', slideProfileHeight + 'px')
    $('#profile_slider_prev').css('left', '0px')
    $('#profile_slider_next').css('right', '0px')
    $('.profile-control p.profile-arrow').css('display', 'block')
  }

  function setWidth () {
    var eventWidth = $('#upcoming-events div.slick-list li.slick-slide').width()
    var exclamationHeight = $('.weather-alert .exclamation p').height()
    var pageContentWidth = $('#main-content').width()
    var websiteAlertContainerLeft = ($('#main-content').outerWidth(true) - $('#main-content').width()) / 2
    var eventArrowWidth = $('#event-slider .event-double-arrow').height()

    $('#upcoming-events div.slick-list div.slick-track').css('height', eventWidth + 'px')
    $('.website-alerts-container').css('width', pageContentWidth + 'px')
    $('.website-alerts-container').css('left', websiteAlertContainerLeft + 'px')
    $('.weather-alert .exclamation p').css('width', exclamationHeight + 'px')
    $('#event-slider .event-double-arrow').css('width', eventArrowWidth + 'px')
  }

  function appendAlert () {
    var webAlertDisplayCheck = false    // checks if webpage has alerts
    var pageAlertCount = 0

    function weatherAlertChecker () {
      var weatherAlertTextLength = $('.website-alerts-container .weather-alert span.alert-check').text().length
      if (weatherAlertTextLength > 0) {
        webAlertDisplayCheck = true
      } else {
        $('.website-alerts-container .weather-alert').remove()
      }
    }
    weatherAlertChecker()

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
      var alertText = ''
      var i = 0  // counter used for cloning additional page-alerts if page has more than 1 alert
      var j = 0  // counter used to count for the page-alert boxes
      var k = 0  // counter used to count through p.alert-text tags

      if (pageAlertCount > 0) {
        webAlertDisplayCheck = true

        // if there is more than 1 page-alert, clone the additional page alerts
        for (i = 1; i < pageAlertCount; i++) {
          $('.website-alerts-container .page-alert').eq(0).clone().appendTo('.website-alerts-container')
        }

        // appends text to page-alert box
        // this block of code prevents bugs that could occur if user deletes alert-1 and starts at alert-2
        for (k = 0; k < $('p.alert-text').length; k++) {
          if ($.trim($('p.alert-text').eq(k).text()).length > 0) {
            alertText = $('p.alert-text').eq(k).text()
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
  appendAlert()

  $('.close').click(function () {
    $(this).parents('.website-alert').animate({ height: '0px' }, function () {
      this.remove()
      if ($('.website-alert').length === 0) {
        $('.website-alerts-container').animate({ padding: '0px' }, function () {
          $('.website-alerts-container').remove()
        })
      }
    })
  })

  // If user touched click the screen, it prevents the click on the screen. Instead, it will display the hover effect and a view button link, which they can then click on to go to link
  function eventsTouchEvents () {
    var eventLinkRemove = false
    $('#upcoming-events .event-wrap').on('click touchstart', function (event) {
      var eventLinkCopy = $(this).children('a.event-link-copy').attr('href')
      if (event.type === 'touchstart') {
        $(this).children('a.event-link').removeAttr('href')
        eventLinkRemove = true
      }
      if (event.type === 'click') {
        if (eventLinkRemove === false) {
          $(this).children('a.event-link').attr('href', eventLinkCopy)
        }
        eventLinkRemove = false
      }
    })
  }
  eventsTouchEvents()

  slickProfileControl()
  setWidth()

  function timeOutFncCall () {
    slickProfileControl()
    setWidth()
  }

  var resizeTimer
  $(window).on('resize', function (e) {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(timeOutFncCall, 250)
  })
})
