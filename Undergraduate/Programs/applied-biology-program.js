jQuery(document).ready(function ($) {
  $(function () {
    $('.interests').typed({
      strings: [ '^750 the health, protection and well-being of animals?',
        '^750 biodiversity?',
        '^750 sustainable food production systems?'
      ],
      typeSpeed: 20,
      backDelay: 1500,
      backSpeed: -20,
      loop: false
    })
  })
    // function isMobile() {
    //     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // }
    // if (!isMobile()) {
    //     var navbar_position = $(".sticky-nav").offset().top;
    //     $(window).on('scroll', function () {
    //         var y_scroll_pos = window.pageYOffset;
    //         var cur_scroll_pos = navbar_position;
    //         if (y_scroll_pos + 10 > cur_scroll_pos) {
    //             $(".sticky-nav").css("position", "fixed");
    //             $(".sticky-nav").css("top", "0");
    //         }
    //         else {
    //             $(".sticky-nav").css("position", "");
    //             $(".sticky-nav").css("top", "");
    //         }
    //     })
    // }

  var profile_count = $('#undergrad-profile > div.featured-undergrad').length
  var index
  var profile_src
  var profile_target
  for (index = 0; index < profile_count; index++) {
    profile_target = document.getElementById('undergrad-profile').getElementsByClassName('featured-undergrad')[index].getElementsByTagName('a')
    profile_src = $(profile_target[0]).attr('href')
    $(profile_target[1]).attr('href', profile_src)
  }

//     // var body_text_content_offset_top;
//     var body_text_content_offset_left;
//     var apply_sidebar_position_left;
//     var apply_sidebar_position_top;
//     var apply_sidebar_position_top_gap;
//     var apply_sidebar_position_bot;
//     var scroll_position1;
//     var scroll_position2;
//     var test1;
//     var test2;
//     var test3;
//     var test4;
//     var window_offset;

//     function check_window_size()
//     {
//         var window_size = $(window).width();
//         if (window_size > 766){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

//     function sidebar_resize()
//     {
//         body_text_content_offset_left = $("#body-text-content").offset().left;
//         sidebar_width = $("#apply-sidebar").outerWidth();
//         sidebar_test = $("#test_width").outerWidth();
//         apply_sidebar_position_top = $("#body-text-content").offset().top;
//         apply_sidebar_position_top_gap = $("#body-text-content").offset().top - $("#main-content").offset().top;
//         apply_sidebar_position_bot = $("#ubc7-footer").offset().top - apply_sidebar_position_top_gap - $("#apply-sidebar").outerHeight();
//         scroll_position1 = $("#body-text-content").offset().top - apply_sidebar_position_top_gap;
//         scroll_position2 = $("#ubc7-footer").offset().top - $("#apply-sidebar").outerHeight() - apply_sidebar_position_top_gap - apply_sidebar_position_top_gap;
//         apply_sidebar_position_left = $(window).width() - $("#body-text-content").offset().left - $("#apply-sidebar").outerWidth();
//         test1 = $(window).width() - $("#apply-sidebar").offset().left - $("#apply-sidebar").outerWidth();
//     }

//     function sidebar_position()
//     {
//         var temp_size;
//         var apply_sidebar_padding;
//         var windowtosizebar_margin;
//         var window_size = $(window).width();
//         var y_scroll_pos = window.pageYOffset;
//         if (window_size > 766)
//         {
//             sidebar_resize();
//             test2 = $("#ubc7-footer").offset().top;
//             test3 = $("#apply-sidebar").outerHeight();
//             console.log(test2 + " ubc footer");
//             console.log(test3 + " sidebar height");
//             console.log(apply_sidebar_position_top_gap + " pos top gap");
//             console.log(scroll_position2 + " footer top");
//             if (y_scroll_pos <= scroll_position1)
//             {
//                 $("#apply-sidebar").css("position", "absolute");
//                 $("#apply-sidebar").css("top", apply_sidebar_position_top + "px");
//                 $("#apply-sidebar").css("left", apply_sidebar_position_left + "px");
//             }
//             else if (y_scroll_pos > scroll_position1 && y_scroll_pos < scroll_position2)
//             {
//                 $("#apply-sidebar").css("position", "fixed");
//                 $("#apply-sidebar").css("top", apply_sidebar_position_top_gap + "px");
//                 $("#apply-sidebar").css("left", apply_sidebar_position_left + "px");
//             }
//             else if (y_scroll_pos >= scroll_position2)
//             {
//                 $("#apply-sidebar").css("position", "absolute");
//                 $("#apply-sidebar").css("top", apply_sidebar_position_bot + "px");
//                 $("#apply-sidebar").css("left", apply_sidebar_position_left + "px");
//             }
//         }
//         else
//         {
//             $("#apply-sidebar").css("position", "static");
//             windowtosizebar_margin = $(window).width() - $(".row-fluid #body-text-content").width();
//             apply_sidebar_padding = $("#apply-sidebar").outerWidth() - $("#apply-sidebar").width();
//             temp_size = $("div.entry-content > div.row-fluid").width() - apply_sidebar_padding;
//             $("#apply-sidebar").attr("style", "width: " + temp_size + ";");
//             console.log("true");
//         }
//     }
//     sidebar_position();

//   $(window).on('scroll', sidebar_position);
//   $(window).on('resize', sidebar_position);
//   //$('#apply-sidebar').on('resize', sidebar_position);
})
