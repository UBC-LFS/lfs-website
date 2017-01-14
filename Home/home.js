jQuery(document).ready(function ($) {
    $('.featured').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll:1,
        arrows: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                    arrows: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
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
    });
    var url = $('#news-url').text();
    $('#news-url').empty();
    $('#news-url').attr('href', url);
    $('#news-1').wrapAll($('#news-url'));
    $('.events').slick({
        slide: 'li',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    var numOfNewsDisplay = 2;
    var i = 0;
    var news_src;
    var news_selector = document.getElementById("nonfeatured-news").getElementsByClassName("news");
    var news_name;
    for (i=0; i<numOfNewsDisplay; i++){
      news_name = "news_" + i.toString();
      $(news_selector[i]).attr("id", news_name);
      news_src = $("#nonfeatured-news > " + "#" + news_name + " > .not_used").text();
      $("#nonfeatured-news > " + "#" + news_name + " > a.post_link").attr("href", news_src);
    }
    
    var index = 0;
    var num_of_profiles = document.getElementById("profile_slider").getElementsByClassName("slick-list")[0].getElementsByClassName("slick-track")[0].children.length;
    var profile_selector = document.getElementById("profile_slider").getElementsByClassName("slick-list")[0].getElementsByClassName("slick-track")[0].getElementsByClassName("slick-slide");
    var profile_selector_src;
    var profile_name;
    var profile_src;
    for (index=0; index<num_of_profiles; index++){
        profile_name = "profile_" + index.toString();
        $(profile_selector[index]).attr("id", profile_name);
        profile_selector_src = document.getElementById(profile_name).getElementsByTagName("a")[0];
        profile_src = $(profile_selector_src).attr("href");
        $("#" + profile_name + " > .profile_link").attr("href", profile_src);
    }
});