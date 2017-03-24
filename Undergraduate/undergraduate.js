jQuery(document).ready(function ($) {
    var profile_count = $("#peers-profile .featured-person").length;
    var index;
    var profile_src;
    var profile_target;
    for (index=0; index<profile_count; index++)
    {
        profile_target = document.getElementById("peers-profile").getElementsByClassName("featured-person")[index].getElementsByTagName("a");
        profile_src = $(profile_target[0]).attr("href");
        $(profile_target[1]).attr("href", profile_src);
    }

    var profile_random_arr = [];
    var profile_random_arr_count = 0;
    var i;
    var j;
    var k;
    var profile_index;
    var no_repeat;
    var profile_select;
    for (i=0;i<3;i++)
    {
        no_repeat = true;
        profile_index = Math.floor(Math.random() * profile_count);
        if (profile_random_arr_count > 0)
        {
            for (j=0;j<profile_random_arr_count;j++)
            {
                if (profile_index === profile_random_arr[j])
                {
                    no_repeat = false;
                    break;
                }
            }
        }
        if (no_repeat === true)
        {
            profile_random_arr.push(profile_index);
            profile_random_arr_count++;
        }
        else
        {
            i--;
        }
    }

    var span4_tag = '<div class="span4 display_block"></div>';
    for(k=0;k<3;k++)
    {
        $('#peers-profile .featured-person').eq(profile_random_arr[k]).wrap(span4_tag).css('display','block');
    }
    $('#peers-profile .span4.display_block').eq(0).css('margin-left','0px');
    $('#peers-profile > div.span12').css('margin-left','0px');

    var data_dismiss_value;
    var alert_dismiss_count = $('.alert-dismissable > .close').length;
    var l;
    for (l=0;l<alert_dismiss_count;l++)
    {
        $('.alert-dismissable > .close').click(remove_alert);
    }
    function remove_alert() {
        data_dismiss_value = $(this).attr('data-dismiss');
        //$(this).parents('div.alert-dismissable.' + data_dismiss_value).eq(0).animate({opacity:'0'}, 1000);
        $(this).parents('div.alert-dismissable.' + data_dismiss_value).eq(0).remove(); // removes first parent
    }

    $("#degree-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#degree-requirements").offset().top
        }, 1000);
    });
    $("#career-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#career-development").offset().top
        }, 1000);
    });
    $("#find-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#find-resources").offset().top
        }, 1000);
    });

    function alert_append()
    {
        var web_alert_display_check = false;    //checks if webpage has alerts
        var page_alert_count = 0;

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

    function alert_position()
    {
        var page_content_width;
        var website_alert_container_left;
        page_content_width = $('#main-content').width();
        $('.website-alerts-container').css('width', page_content_width+'px');

        website_alert_container_left = ($('#main-content').outerWidth(true) - $('#main-content').width())/2;
        $('.website-alerts-container').css('left',website_alert_container_left+'px');
    }
    alert_position();

    function timeOutFncCall()
    {
        alert_position();
    }

    $(window).on('resize',function () {
        setTimeout(timeOutFncCall, 100);
    });
});