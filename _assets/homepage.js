jQuery(document).ready(function ($) {
    $("div[role='main']").prepend($("#main-content"));
    $("#main-content").prepend($("#content"));
    $("#main-content").prepend($(".breadcrumb"));
    $("#container").prepend($(".image-region"));
    $('.slick-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});