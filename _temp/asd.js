jQuery(document).ready(function ($) { 
    $("#link-1").click(function () {
        $('html, body').animate({
            scrollTop: $("#get-experience-at-ubc").offset().top
        }, 800);
    });
    $("#link-2").click(function () {
        $('html, body').animate({
            scrollTop: $("#using-your-applied-animal-biology-degree").offset().top
        }, 800);
    });
    $("#link-3").click(function () {
        $('html, body').animate({
            scrollTop: $("#career-possibilities").offset().top
        }, 800);
    });
    $("#link-4").click(function () {
        $('html, body').animate({
            scrollTop: $("#academic-possibilities").offset().top
        }, 800);
    });
    $("#link-5").click(function () {
        $('html, body').animate({
            scrollTop: $("#alumni-profiles").offset().top
        }, 800);
    });
    $("#link-6").click(function () {
        $('html, body').animate({
            scrollTop: $("#resources").offset().top
        }, 800);
    });
    $("#link-last").click(function () {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 800);
    });
  
    var window_size = $(window).width();
    var image = document.getElementById('test');  
    var image_width = image.clientWidth;
    var navbar_width = image_width - 100;
    if (window_size > 780){
    	var navbar_position = $(".sticky-nav").offset().top;
    	$(window).on('scroll', function() { 
       	    var y_scroll_pos = window.pageYOffset;
            var cur_scroll_pos = navbar_position;
            if (y_scroll_pos + 50 > cur_scroll_pos) {
            	$(".sticky-nav").css("position", "fixed");
            	$(".sticky-nav").css("top", "50.391px");
            }
            else {
            	$(".sticky-nav").css("position", "");
            	$(".sticky-nav").css("top", "");
            }
       });
  } else {
      $(".entry-content > .span12").prepend($(".page-toc.sticky-nav"));
      $(".sticky-nav").css("position", "relative");
      $(".sticky-nav").css("width", navbar_width);
  }
  
      

 $(window).resize(function() {
    var window_size_resize = $(window).width();
    var image_width_resize = image.clientWidth; 
    var navbar_width_resize = image_width_resize - 100;
    
    if(window_size_resize > 780) {
      $(".span12 > .span5").append($(".page-toc.sticky-nav"));
      if(window_size_resize >= 1040) {
          $(".sticky-nav").css("width", "250px");
      } else if (window_size_resize >= 940) {
          $(".sticky-nav").css("width", "220px");
      } else {
          $(".sticky-nav").css("width", "180px");
      } 
      
      console.log ("check");
    	var img = document.getElementById('test');
    	var height = img.clientHeight;
    	var image_position = $("#test").offset().top;
    	var navbar_position_resize = height + image_position;
    
    	$(window).on('scroll', function() {
          console.log ("test");
            var y_scroll_pos = window.pageYOffset;
            var cur_scroll_pos = navbar_position_resize;
            if (y_scroll_pos + 50 > cur_scroll_pos) {
               $(".sticky-nav").css("position", "fixed");
               $(".sticky-nav").css("top", "50.391px");
            }
            else {
               $(".sticky-nav").css("position", "");
               $(".sticky-nav").css("top", "");
            }
       });
    }
    else {
       $(".entry-content > .span12").prepend($(".page-toc.sticky-nav"));
       $(".sticky-nav").css("position", "relative");
       $(".sticky-nav").css("width", navbar_width_resize); 
    }
  });
});