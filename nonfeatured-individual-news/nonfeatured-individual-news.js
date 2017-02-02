jQuery(document).ready(function ($) {
    var recent_news_counter;
    var recent_news_target;
    var recent_news_src;
    var index;
    function recent_news_linking() {
        recent_news_counter = document.getElementById('recent-news-bar').getElementsByClassName('recent-news').length;
        for (index=0;index<recent_news_counter;index++)
        {
            recent_news_src = document.getElementById('recent-news-bar').getElementsByClassName('recent-news')[index].getElementsByTagName('a')[0].href;
            document.getElementById('recent-news-bar').getElementsByClassName('recent-news')[index].getElementsByTagName('a')[1].setAttribute('href', recent_news_src);
        }
    }
    recent_news_linking();
    $('.recent-news br').remove();

    var nonfeatured_news_content_height;
    var recent_news_bar_height;
    function set_recent_news_height() {
        nonfeatured_news_content_height = $('#nonfeatured-news-content').height();
        recent_news_bar_height = nonfeatured_news_content_height - $('#recent-news-heading').outerHeight(true);
        $('#recent-news-bar').css('height',recent_news_bar_height+'px');
        console.log(nonfeatured_news_content_height);
    }
    set_recent_news_height();
})