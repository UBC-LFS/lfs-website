/* global jQuery */
jQuery(document).ready(function ($) {
  $('.student_testimonial').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.student_testimonial_prev'),
    nextArrow: $('.student_testimonial_next')
  })
  for (let index = 0; index < $('#alumni-profile .featured-person').length; index++) {
    var profileTarget = document.getElementById('alumni-profile').getElementsByClassName('featured-person')[index].getElementsByTagName('a')
    var profileSrc = $(profileTarget[0]).attr('href')
    $(profileTarget[1]).attr('href', profileSrc)
  }
})
