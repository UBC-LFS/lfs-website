jQuery(document).ready(function ($) {
    $('.featured').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll:1,
        arrows: true,
        autoplay: false,
        swipe: true,
        prevArrow: $('.profile-prev'),
        nextArrow: $('.profile-next'),
        responsive: [
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
                // breakpoint: 768,
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
            // breakpoint: 480,
                breakpoint: 481,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
    var numOfNewsDisplay = $('#nonfeatured-news > .news').length;
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

    function element_display() {
        $('.weather-alert').css('display', 'block');
        $('.website-individual-alert').css('display', 'block');
        $('.profile-control p.profile-arrow').css('display','block');
        $('#upcoming-events .event-wrap .event-view-position').css('display', 'block');
    }
    element_display();

    var slide_profile_height;
    var window_size;
    function slick_profile_control()
    {
        slide_profile_height = $('#profile_slider').height();
        $('#profile_slider_prev').css('height', slide_profile_height + 'px');
        $('#profile_slider_next').css('height', slide_profile_height + 'px');
        $('#profile_slider_prev').css('left','0px');
        $('#profile_slider_next').css('right','0px');
        $('.profile-control p.profile-arrow').css('display','block');
    }

    var featured_news_height;
    var event_width;
    var exclamation_height;
    var page_content_width;
    var website_alert_container_left;
    var weather_alert_outer_left;
    var event_arrow_width;
    var event_wrap_height;
    function set_width() {
        var single_news_height;
        if ($(window).width() < 767)
        {
            single_news_height = $('#nonfeatured-news .news').outerHeight(true);
            $('#nonfeatured-news').css("height", single_news_height);
        }
        else
        {
            featured_news_height = $('#news-1').height();
            $('#nonfeatured-news').css('height',featured_news_height.toString() + 'px');
        }
        event_width = $('#upcoming-events div.slick-list li.slick-slide').width();
        $('#upcoming-events div.slick-list div.slick-track').css('height', event_width+'px');

        page_content_width = $('#main-content').width();
        $('.website-alerts-container').css('width', page_content_width+'px');

        website_alert_container_left = ($('#main-content').outerWidth(true) - $('#main-content').width())/2;
        $('.website-alerts-container').css('left',website_alert_container_left+'px');

        exclamation_height = $('.weather-alert .exclamation p').height();
        $('.weather-alert .exclamation p').css('width',exclamation_height+'px');

        event_arrow_width = $('#event-slider .event-double-arrow').height();
        $('#event-slider .event-double-arrow').css('width', event_arrow_width+'px');

        event_wrap_height = ($('#upcoming-events .event-wrap').height())*0.1;
        $('#upcoming-events .event-title').css('height', event_wrap_height+'px');
    }

    function alert_append()
    {
        var web_alert_p_count = $('p.alert-text').length;
        var web_alert_count = 0;
        var web_alert_text;
        var web_alert_text_count;
        var k;
        var alert_name;
        var alert_clone;
        var alert_text;
        var weather_alert_check;
        var web_alert_display_check = false;
        var i;
        var test1;
        var test2;
        var test3;
        for (k=0; k<web_alert_p_count; k++)
        {
            web_alert_text = $('p.alert-text');
            web_alert_text_count = $.trim(web_alert_text.eq(k).text()).length;
            if (web_alert_text_count > 0)
            {
                web_alert_count++;
            }
        }

        weather_alert_check = $('.website-alerts-container .weather-alert span.alert-check').text().length;
        if (weather_alert_check > 0)
        {
            web_alert_display_check = true;
        }
        else
        {
            $('.website-alerts-container .weather-alert').remove();
        }

        if (web_alert_count > 0)
        {
            web_alert_display_check = true;
            for (k=1; k<web_alert_count; k++)
            {
                $('.website-alerts-container .page-alert').eq(0).clone().appendTo('.website-alerts-container');
            }
            i = 0;
            for (k=0; k<$('p.alert-text').length; k++)
            {
                if ($.trim($('p.alert-text').eq(k).text()).length > 0)
                {
                    alert_text = $('p.alert-text').eq(k).text();
                    $('.website-alerts-container .page-alert .website-content-text').eq(i).text(alert_text);
                    i++
                }
                if (i >= web_alert_count)
                {
                    break;
                }
            }
        }
        else
        {
            $('.website-alerts-container .page-alert').remove();
        }
        $('.website-alert-texts').remove();

        if ($('.website-alert').length > 0)
        {
            $('.website-alerts-container').css('padding-bottom', '5px');
        }

        if (web_alert_display_check == true)
        {
            $('.website-alerts-container').css('display', 'block');
        }
    }
    alert_append();
    
    $('.close').click(function(){
        $(this).parents('.website-alert').animate({height: "0px"}, function() {
            this.remove();
            if ($('.website-alert').length === 0)
            {
                $('.website-alerts-container').animate({padding: "0px"}, function() {
                    $('.website-alerts-container').remove();
                });
            }
        });
    });

    var event_link_remove = false;
    var event_link_copy;
    $('#upcoming-events .event-wrap').on('click touchstart', function(event){
        event_link_copy = $(this).children('a.event-link-copy').attr('href');
        if (event.type == 'touchstart')
        {
            $(this).children('a.event-link').removeAttr('href');
            event_link_remove = true;
        }
        if (event.type == 'click')
        {
            if (event_link_remove == false)
            {
                $(this).children('a.event-link').attr('href', event_link_copy);
            }
            event_link_remove = false;
        }
    });

    slick_profile_control();
    set_width();

    function timeOutFncCall()
    {
        slick_profile_control();
        set_width();
    }

    $(window).on('resize',function () {
        setTimeout(timeOutFncCall, 100);
    });
});