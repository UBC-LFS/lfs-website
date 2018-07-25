/* global jQuery */
jQuery(document).ready(function ($) {
  $('#alumni-news').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.student_testimonial_prev'),
    nextArrow: $('.student_testimonial_next')
  })
})
