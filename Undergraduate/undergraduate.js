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
});