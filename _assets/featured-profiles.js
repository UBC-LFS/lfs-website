jQuery(document).ready(function ($) {
    $( ".span4" ).each(function(index) {
         $( this ).addClass("index-" + Math.floor(index/3));
    });
    var numberOfProfiles = $('.span4').length;
    var span12 = '<div class="span12 border-bottom" style="margin-left: 0; margin-top: 3%; padding-bottom: 15px;"></div>';
    for (i=0; i<=numberOfProfiles; i++) {
        if (i%3===0) {
            $('.index-' + Math.floor(i/3)).wrapAll(span12);
        }
    }
    $("img").attr("id", "featured");
});