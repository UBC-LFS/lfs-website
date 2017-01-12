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
});