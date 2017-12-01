/* global jQuery */
jQuery(document).ready(function ($) {
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

  function eventsTouchEvents () {
    var removeEventLink = false
    $('#upcoming-events .event-wrap').on('click touchstart', function (event) {
      var eventLinkCopy = $(this).children('a.event-link-copy').attr('href')
      if (event.type === 'touchstart') {
        $(this).children('a.event-link').removeAttr('href')
        removeEventLink = true
      }
      if (event.type === 'click') {
        if (removeEventLink === false) {
          $(this).children('a.event-link').attr('href', eventLinkCopy)
        }
        removeEventLink = false
      }
    })
  }
  eventsTouchEvents()
})
