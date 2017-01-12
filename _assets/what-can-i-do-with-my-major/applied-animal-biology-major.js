jQuery(document).ready(function ($) {
    $("#link-1").click(function () {
        $('html, body').animate({
            scrollTop: $("#get-experience-at-ubc").offset().top
        }, 1000);
    });
    $("#link-2").click(function () {
        $('html, body').animate({
            scrollTop: $("#using-your-applied-animal-biology-degree").offset().top
        }, 1000);
    });
    $("#link-3").click(function () {
        $('html, body').animate({
            scrollTop: $("#career-possibilities").offset().top
        }, 1000);
    });
    $("#link-4").click(function () {
        $('html, body').animate({
            scrollTop: $("#academic-possibilities").offset().top
        }, 1000);
    });
    $("#link-5").click(function () {
        $('html, body').animate({
            scrollTop: $("#alumni-profiles").offset().top
        }, 1000);
    });
    $("#link-6").click(function () {
        $('html, body').animate({
            scrollTop: $("#resources").offset().top
        }, 1000);
    });
    $("#link-last").click(function () {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });
    var navbar_position = $(".sticky-nav").offset().top;
    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var cur_scroll_pos = navbar_position;
        if (y_scroll_pos + 10 > cur_scroll_pos) {
            $(".sticky-nav").css("position", "fixed");
            $(".sticky-nav").css("top", "0");
        }
        else {
            $(".sticky-nav").css("position", "");
            $(".sticky-nav").css("top", "");
        }
    })
});