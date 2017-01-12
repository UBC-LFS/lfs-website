jQuery(document).ready(function ($) {
    $("div[role='main']").prepend($("#main-content"));
    $("#main-content").prepend($("#content"));
    $("#main-content").prepend($(".breadcrumb"));
    $("#container").prepend($(".image-region"));
 
});