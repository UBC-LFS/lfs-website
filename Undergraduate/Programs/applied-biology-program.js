/* global jQuery */
jQuery(document).ready(function ($) {
  $(function () {
    $('.interests').typed({
      strings: [ '^750 the health, protection and well-being of animals?',
        '^750 biodiversity?',
        '^750 sustainable food production systems?'
      ],
      typeSpeed: 20,
      backDelay: 1500,
      backSpeed: -20,
      loop: false
    })
  })
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
  function setupSlickSlider () {
    [].forEach.call($('.slider-wrap .slick-slide'), function (item, index, array) {
      var slickSliderLink = $(item).children('a').eq(0).attr('href')
      $(item).children('a').eq(1).attr('href', slickSliderLink)
    })
  }
  setupSlickSlider()

  for (let index = 0; index < $('#undergrad-profile > div.featured-undergrad').length; index++) {
    var profileTarget = document.getElementById('undergrad-profile').getElementsByClassName('featured-undergrad')[index].getElementsByTagName('a')
    var profileSrc = $(profileTarget[0]).attr('href')
    $(profileTarget[1]).attr('href', profileSrc)
  }
})
