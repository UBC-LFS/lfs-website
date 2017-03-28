jQuery(document).ready(function ($) {
    $("#student-research-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#student-research").offset().top
        }, 1000);
    });
    $("#research-group-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#research-centres").offset().top
        }, 1000);
    });
    $("#research-chairs-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#research-chairs").offset().top
        }, 1000);
    });
});