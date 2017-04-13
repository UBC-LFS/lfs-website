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

    $('.news-slider').slick({
        arrows: true,
        prevArrow: $('.news-prev'),
        nextArrow: $('.news-next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        swipe: false,
        fade: true,
        asNavFor: '.thumbnail-nav-dots'
    });

    $('.thumbnail-nav-container-box').slick({
        slidesToShow: 6,
        focusOnSelect: true,
        vertical: true,
        asNavFor: '.news-slider'
    });

    $('.thumbnail-nav-dots').slick({
        arrows: false,
        slidesToShow: 6,
        focusOnSelect: true,
        asNavFor: '.news-slider'
    });

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
    });
    
    // add links to profile
    function addLinksToProfiles() {
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
    }
    addLinksToProfiles();

    function element_display() {
        $('.profile-control p.profile-arrow').css('display','block');
    }
    element_display();

    function slick_profile_control()
    {
        var slide_profile_height;
        slide_profile_height = $('#profile_slider').height();
        $('#profile_slider_prev').css('height', slide_profile_height + 'px');
        $('#profile_slider_next').css('height', slide_profile_height + 'px');
        $('#profile_slider_prev').css('left','0px');
        $('#profile_slider_next').css('right','0px');
        $('.profile-control p.profile-arrow').css('display','block');
    }

    var thumbnailAnimation = function() {
        var slider_active_position = $("#home-news .thumbnail-nav-container-box .slick-current").position().top;
        console.log(slider_active_position);
        var slider_active_height = $("#home-news .thumbnail-nav-container-box .slick-current .thumbnail-nav-box-content").height();
        console.log(slider_active_height);
        $("#home-news .thumbnail-nav-selector").animate({
            top: slider_active_position+"px"
        },500);
        $("#home-news .thumbnail-nav-selector .thumbnail-nav-selector-box").animate({
            paddingTop: slider_active_height-2+"px"
        },500);
    }
    
    function set_width() {
        var featured_news_height;
        var event_width;
        var single_news_height;
        var exclamation_height;
        var page_content_width;
        var website_alert_container_left;
        var event_arrow_width;
        var event_wrap_height;

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

        thumbnailAnimation();
        // event_wrap_height = ($('#upcoming-events .event-wrap').height())*0.1;
        // $('#upcoming-events .event-title').css('height', event_wrap_height+'px');
    }

    function alert_append()
    {
        var web_alert_display_check = false;    //checks if webpage has alerts
        var page_alert_count = 0;

        function weather_alert_checker() {
            var weather_alert_text_length = $('.website-alerts-container .weather-alert span.alert-check').text().length;
            if (weather_alert_text_length > 0)
            {
                web_alert_display_check = true;
            }
            else
            {
                $('.website-alerts-container .weather-alert').remove();
            }
        }
        weather_alert_checker();
        
        function page_alert_counter() {
            var page_alert_p_count = $('p.alert-text').length;
            var page_alert_text = $('p.alert-text');
            var page_alert_text_count = 0;
            var page_alert_num = 0;

            for (k=0; k<page_alert_p_count; k++)
            {
                page_alert_text_count = $.trim(page_alert_text.eq(k).text()).length;
                if (page_alert_text_count > 0)
                {
                    page_alert_num++;
                }
            }
            return page_alert_num;
        }
        page_alert_count = page_alert_counter();

        function page_alert_checker() {
            var alert_text = '';
            var i = 0;  // counter used for cloning additional page-alerts if page has more than 1 alert
            var j = 0;  // counter used to count for the page-alert boxes
            var k = 0;  // counter used to count through p.alert-text tags

            if (page_alert_count > 0)
            {
                web_alert_display_check = true;

                // if there is more than 1 page-alert, clone the additional page alerts
                for (i=1; i<page_alert_count; i++)
                {
                    $('.website-alerts-container .page-alert').eq(0).clone().appendTo('.website-alerts-container');
                }

                // appends text to page-alert box
                // this block of code prevents bugs that could occur if user deletes alert-1 and starts at alert-2
                for (k=0; k<$('p.alert-text').length; k++)
                {
                    if ($.trim($('p.alert-text').eq(k).text()).length > 0)
                    {
                        alert_text = $('p.alert-text').eq(k).text();
                        $('.website-alerts-container .page-alert .website-content-text').eq(j).text(alert_text);
                        j++
                    }
                    if (j >= page_alert_count)
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
        }
        page_alert_checker();

        function website_alert_styling() {
            if ($('.website-alert').length > 0)
            {
                $('.website-alerts-container').css('padding-bottom', '5px');
            }
            if (web_alert_display_check === true)
            {
                $('.website-alerts-container').css('display', 'block');
            }
        }
        website_alert_styling();
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


    // If user touched click the screen, it prevents the click on the screen. Instead, it will display the hover effect and a view button link, which they can then click on to go to link
    function eventsTouchEvents() {
        var event_link_remove = false;
        $('#upcoming-events .event-wrap').on('click touchstart', function(event){
            var event_link_copy = $(this).children('a.event-link-copy').attr('href');
            if (event.type === 'touchstart')
            {
                $(this).children('a.event-link').removeAttr('href');
                event_link_remove = true;
            }
            if (event.type === 'click')
            {
                if (event_link_remove === false)
                {
                    $(this).children('a.event-link').attr('href', event_link_copy);
                }
                event_link_remove = false;
            }
        });
    }
    eventsTouchEvents();


    var selectThumbnail = function() {
        $("#home-news .thumbnail-nav-container-box").on("click", thumbnailAnimation);
    };
    selectThumbnail();


    slick_profile_control();
    set_width();

    function timeOutFncCall()
    {
        slick_profile_control();
        set_width();
    }

    var resizeTimer;
    $(window).on('resize',function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(timeOutFncCall, 250);
    });

    
});