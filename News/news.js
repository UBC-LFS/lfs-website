/* global jQuery */
jQuery(document).ready(function ($) {
  for (let index = 0; index < $('#non-featured-news-section > div.news').length; index++) {
    let nonfeaturedNewsTarget = $('#non-featured-news-section > div.news:nth-of-type(' + (index + 1).toString() + ') > a:nth-of-type(1)').attr('href')
    $('#non-featured-news-section > div.news:nth-of-type(' + (index + 1).toString() + ') > a.non-featured-news').attr('href', nonfeaturedNewsTarget)
  }
})
