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
});