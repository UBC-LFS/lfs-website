jQuery(document).ready(function ($) { 
    var profile_count = $("#alumni-profile .featured-person").length;
    var index;
    var profile_src;
    var profile_target;
    for (index=0; index<profile_count; index++)
    {
        profile_target = document.getElementById("alumni-profile").getElementsByClassName("featured-person")[index].getElementsByTagName("a");
        profile_src = $(profile_target[0]).attr("href");
        $(profile_target[1]).attr("href", profile_src);
    }
});