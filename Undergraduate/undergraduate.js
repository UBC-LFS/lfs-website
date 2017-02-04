jQuery(document).ready(function ($) {
    $( ".featured-person" ).each(function(index) {
         $( this ).addClass("index-" + Math.floor(index/3));
    });
    var numberOfProfiles = $('.featured-person').length;
    var span12 = '<div class="span12" style="margin-left: 0;"></div>';
    for (i=0; i<=numberOfProfiles; i++) {
        if (i%3===0) {
            $('.index-' + Math.floor(i/3)).wrapAll(span12);
        }
    }

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
        profile_index = Math.floor(Math.random() * profile_count) + 1;
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
            console.log(profile_random_arr[profile_random_arr_count - 1]);
        }
        else
        {
            i--;
        }
    }
    
    console.log(profile_count);

    for(k=0;k<3;k++)
    {
        //profile_select = document.getElementById('peers-profile').get
    }
});