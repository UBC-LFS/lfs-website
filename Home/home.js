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
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 480,
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
    }
    element_display(); //element_display must be first, cause some of the function below targets element_display

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
    var weather_alert_outer_left;
    var event_arrow_width;
    function set_width() {
        featured_news_height = $('#news-1').height();
        $('#nonfeatured-news').css('height',featured_news_height.toString() + 'px');
        event_width = $('#upcoming-events div.slick-list li.slick-slide').width();
        $('#upcoming-events div.slick-list div.slick-track').css('height', event_width+'px');
        page_content_width = $('#main-content').width() - 2;
        $('.weather-alert-outer').css('width', page_content_width+'px');
        // $('.weather-alert').css('width', page_content_width+'px');
        // $('.website-alert').css('width', page_content_width+'px');
        weather_alert_outer_left = ($('#main-content').outerWidth(true) - $('#main-content').width())/2;
        $('.weather-alert-outer').css('left',weather_alert_outer_left+'px');
        $('.website-alert').css('width', page_content_width+'px');
        $('.website-alert').css('left',weather_alert_outer_left+'px');
        exclamation_height = $('.weather-alert .exclamation p').height();
        $('.weather-alert .exclamation p').css('width',exclamation_height+'px');
        event_arrow_width = $('#event-slider .event-double-arrow').height();
        $('#event-slider .event-double-arrow').css('width', event_arrow_width+'px');
    }

    $('.close').click(function(){
        var test5 = $(this);
        var getDataDismiss = $(this).attr("data-dismiss");
        $('.' + getDataDismiss).animate({height: "0px"}, function() {
            $('.' + getDataDismiss).remove();
        });

        // $('.weather-alert-outer').animate({height: "0px"}, function() {
        //     $('.weather-alert-outer').remove();
        // });
    });

    // cloning website alert
    function alert_append()
    {
        var web_alert_p_count = $('p.alert-text').length;
        var web_alert_count = 0;
        var web_alert_text;
        var web_alert_text_count;
        var k;
        var l;
        var m;
        var alert_name;
        var alert_clone;
        var test6;
        var test7;
        var test8;
        for (k=0; k<web_alert_p_count; k++)
        {
            web_alert_text = $('p.alert-text');
            web_alert_text_count = $.trim(web_alert_text.eq(k).text()).length;
            if (web_alert_text_count > 0)
            {
                web_alert_count++;
            }
        }

        if (web_alert_count > 0)
        {
            // $('.website-alerts-container .page-alert').eq(0).addClass('alert_0');
            // test6 = $('.website-alerts-container .page-alert').eq(0);
            // $('.website-alerts-container .page-alert').eq(1).addClass('alert_1');
            // test7 = $('.website-alerts-container .page-alert').eq(1);
            // console.log("eq0", test6);
            // console.log("eq1", test7);
            for (l=1; l<web_alert_count; l++)
            {
                $('.website-alerts-container .page-alert').clone().appendTo('.website-alerts-container');
                
                // alert_name = "alert_" + l.toString();
                // $('.website-alerts-container .page-alert').eq(l).addClass(alert_name);
            }
            // for (m=0; m<web_alert_count; m++)
            // {
            //     alert_name = "alert_" + m.toString();
            //     $('.website-alerts-container .page-alert').eq(m).addClass(alert_name);
            // }
        }
        else
        {
            $('.website-alerts-container .page-alert').remove();
        }
    }
    alert_append();
    // function alert_display()
    // {
    //     var weather_alert_exist = $('.website-alerts .weather-alert span.weather').text().length;
    //     if (weather_alert_exist>0)
    //     {
    //         $('.website-alerts .alert.weather-alert').css('display', 'block');
    //         $('.website-alerts').css('display', 'block');
    //     }

    //     var website_alert_count = 0;
    //     var j;
    //     var website_alert = $('p.home-alert');
    //     var website_alert_text;
    //     for (j=0; j<3; j++)
    //     {
    //         website_alert_text = $.trim(website_alert.eq(j).text()).length;
    //         console.log(website_alert_text > 0);

    //         if (website_alert_text) {
    //             website_alert_count++;
    //         }
    //     }
        
    //     console.log("weather", weather_alert_exist>0);
    // }

    slick_profile_control();
    set_width();
    // alert_display();
    
    function function_timeout()
    {
        setTimeout(slick_profile_control, 100);
        setTimeout(set_width, 100);
    }

    $('#event-slider .event-prev').on("mouseenter", function(){
        $('#event-slider .event-double-arrow p').text('\u2190');
    })
    $('#event-slider .event-next').on("mouseenter", function(){
        $('#event-slider .event-double-arrow p').text('\u2192');
    })
    $('#event-slider .event-double-arrow').on("mouseleave", function() {
        $('#event-slider .event-double-arrow p').text('\u2194');
    })
    $(window).on('resize', function_timeout);
    
});