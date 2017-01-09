jQuery(document).ready(function ($) {
    var numofrows = document.getElementById("profiles").getElementsByClassName("span4");
    var profile_name;
    var profile_src;
    var clone;
    $( ".span4" ).each(function(index) {
         $( this ).addClass("index-" + Math.floor(index/3));
    });
    var numberOfProfiles = $('.span4').length;
    var span12 = '<div class="span12 border-bottom" style="margin-left: 0; margin-top: 3%; padding-bottom: 15px;"></div>';
    for (i=0; i<numberOfProfiles; i++) {
        if (i%3===0) {
            $('.index-' + Math.floor(i/3)).wrapAll(span12);
        }
        profile_name = "profile_" + i.toString();
        $(numofrows[i]).attr("id", profile_name);
        profile_src = $("#" + profile_name + " > a:nth-of-type(1)").attr("href");
        $("#" + profile_name + " > .profile-link").attr("href", profile_src);
    }
    $("img").attr("id", "featured");
});