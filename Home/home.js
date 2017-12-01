/* global jQuery */
jQuery(document).ready(function ($) {
  $('.featured').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    swipe: true,
    prevArrow: $('.profile-prev'),
    nextArrow: $('.profile-next'),
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          arrows: true,
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1750,
        settings: {
          arrows: true,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
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
  function addLinksToProfiles () {
    var index = 0
    var numberOfProfiles = document.getElementById('profile_slider').getElementsByClassName('slick-list')[0].getElementsByClassName('slick-track')[0].children.length
    var profileSelector = document.getElementById('profile_slider').getElementsByClassName('slick-list')[0].getElementsByClassName('slick-track')[0].getElementsByClassName('slick-slide')
    var profileSelectorSource
    for (index = 0; index < numberOfProfiles; index++) {
      var profileName = 'profile_' + index.toString()
      $(profileSelector[index]).attr('id', profileName)
      profileSelectorSource = document.getElementById(profileName).getElementsByTagName('a')[0]
      var profileSource = $(profileSelectorSource).attr('href')
      $('#' + profileName + ' > .profile_link').attr('href', profileSource)
    }
  }
  addLinksToProfiles()

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
    var singleNewsHeight
    var exclamation_height
    var page_content_width
    var website_alert_container_left
    var event_arrow_width
    var event_wrap_height

    $('#upcoming-events div.slick-list div.slick-track').css('height', eventWidth + 'px')

    page_content_width = $('#main-content').width()
    $('.website-alerts-container').css('width', page_content_width + 'px')

    website_alert_container_left = ($('#main-content').outerWidth(true) - $('#main-content').width()) / 2
    $('.website-alerts-container').css('left', website_alert_container_left + 'px')

    exclamation_height = $('.weather-alert .exclamation p').height()
    $('.weather-alert .exclamation p').css('width', exclamation_height + 'px')

    event_arrow_width = $('#event-slider .event-double-arrow').height()
    $('#event-slider .event-double-arrow').css('width', event_arrow_width + 'px')
  }

  function alert_append () {
    var web_alert_display_check = false    // checks if webpage has alerts
    var page_alert_count = 0

    function weather_alert_checker () {
      var weather_alert_text_length = $('.website-alerts-container .weather-alert span.alert-check').text().length
      if (weather_alert_text_length > 0) {
        web_alert_display_check = true
      } else {
        $('.website-alerts-container .weather-alert').remove()
      }
    }
    weather_alert_checker()

    function page_alert_counter () {
      var page_alert_p_count = $('p.alert-text').length
      var page_alert_text = $('p.alert-text')
      var page_alert_text_count = 0
      var page_alert_num = 0

      for (k = 0; k < page_alert_p_count; k++) {
        page_alert_text_count = $.trim(page_alert_text.eq(k).text()).length
        if (page_alert_text_count > 0) {
          page_alert_num++
        }
      }
      return page_alert_num
    }
    page_alert_count = page_alert_counter()

    function page_alert_checker () {
      var alert_text = ''
      var i = 0  // counter used for cloning additional page-alerts if page has more than 1 alert
      var j = 0  // counter used to count for the page-alert boxes
      var k = 0  // counter used to count through p.alert-text tags

      if (page_alert_count > 0) {
        web_alert_display_check = true

                // if there is more than 1 page-alert, clone the additional page alerts
        for (i = 1; i < page_alert_count; i++) {
          $('.website-alerts-container .page-alert').eq(0).clone().appendTo('.website-alerts-container')
        }

                // appends text to page-alert box
                // this block of code prevents bugs that could occur if user deletes alert-1 and starts at alert-2
        for (k = 0; k < $('p.alert-text').length; k++) {
          if ($.trim($('p.alert-text').eq(k).text()).length > 0) {
            alert_text = $('p.alert-text').eq(k).text()
            $('.website-alerts-container .page-alert .website-content-text').eq(j).text(alert_text)
            j++
          }
          if (j >= page_alert_count) {
            break
          }
        }
      } else {
        $('.website-alerts-container .page-alert').remove()
      }
      $('.website-alert-texts').remove()
    }
    page_alert_checker()

    function website_alert_styling () {
      if ($('.website-alert').length > 0) {
        $('.website-alerts-container').css('padding-bottom', '5px')
      }
      if (web_alert_display_check === true) {
        $('.website-alerts-container').css('display', 'block')
      }
    }
    website_alert_styling()
  }
  alert_append()

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
    var event_link_remove = false
    $('#upcoming-events .event-wrap').on('click touchstart', function (event) {
      var event_link_copy = $(this).children('a.event-link-copy').attr('href')
      if (event.type === 'touchstart') {
        $(this).children('a.event-link').removeAttr('href')
        event_link_remove = true
      }
      if (event.type === 'click') {
        if (event_link_remove === false) {
          $(this).children('a.event-link').attr('href', event_link_copy)
        }
        event_link_remove = false
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
