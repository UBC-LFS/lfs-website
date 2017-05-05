jQuery(document).ready(function ($) {
  var non_featured_news_count = $("#non-featured-news-section > div.news").length;
  var index;
  var nonfeatured_news_target;
  for (index=0; index<non_featured_news_count; index++)
  {
    //nonfeatured_news_target = document.getElementById("non-featured-news-section").getElementsByClassName
    nonfeatured_news_target = $("#non-featured-news-section > div.news:nth-of-type(" + (index+1).toString() + ") > a:nth-of-type(1)").attr("href");
    $("#non-featured-news-section > div.news:nth-of-type(" + (index+1).toString() + ") > a.non-featured-news").attr("href",nonfeatured_news_target);
    console.log(nonfeatured_news_target);
  }
});