jQuery(document).ready(function ($) {
    $(function () {
        $(".interests").typed({
            strings: ["^750 the interrelationships of plants, animals, soils and the atmosphere?",
                "^750 biodiversity?",
                "^750 sustainable food production systems?",
                "^750 protecting and improving the natural environment?",
                "^750 the health, protection and well-being of animals?",
                "^750 working to improve food production and solve food shortages?",
                "^750 teaching others the intricacies and importance of the living world?",
                "^750 the role of agriculture in urban areas?",
            ],
            typeSpeed: 20,
            backDelay: 1500,
            backSpeed: -20,
            loop: true,
        });
    });
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

    var profile_count = $("#undergrad-profile > div.featured-undergrad").length;
    var index;
    var profile_src;
    var profile_target;
    for (index=0; index<profile_count; index++)
    {
        profile_target = document.getElementById("undergrad-profile").getElementsByClassName("featured-undergrad")[index].getElementsByTagName("a");
        profile_src = $(profile_target[0]).attr("href");
        $(profile_target[1]).attr("href", profile_src);
    }


    // var body_text_content_offset_top;
    var body_text_content_offset_left;
    var apply_sidebar_position_left;
    var apply_sidebar_position_top;
    var apply_sidebar_position_top_gap;
    var apply_sidebar_position_bot;
    var scroll_position1;
    var scroll_position2;
    var test1;

    function check_window_size()
    {
        var window_size = $(window).width();
        var temp_content_width;
        if (window_size > 766){
            return true;
        }
        else{
            return false;
        }
    }

    function sidebar_resize()
    {
        if (check_window_size())
        {
            // body_text_content_offset_top = $("#body-text-content").offset().top;
            body_text_content_offset_left = $("#body-text-content").offset().left;
            sidebar_width = $("#apply-sidebar").outerWidth();
            sidebar_test = $("#test_width").outerWidth();
            apply_sidebar_position_top = $("#body-text-content").offset().top;
            apply_sidebar_position_top_gap = $("#body-text-content").offset().top - $("#main-content").offset().top;
            apply_sidebar_position_bot = $("#ubc7-footer").offset().top - apply_sidebar_position_top_gap - $("#apply-sidebar").outerHeight();
            scroll_position1 = $("#body-text-content").offset().top - apply_sidebar_position_top_gap;
            scroll_position2 = $("#ubc7-footer").offset().top - $("#apply-sidebar").outerHeight() - apply_sidebar_position_top_gap - apply_sidebar_position_top_gap;
            apply_sidebar_position_left = $(window).width() - $("#body-text-content").offset().left - $("#apply-sidebar").outerWidth();
            test1 = $(window).width() - $("#apply-sidebar").offset().left - $("#apply-sidebar").outerWidth();
            //console.log(sidebar_width);
            //console.log(sidebar_test);
            return true;
        }
        else
        {
            return false;
        }
    }

    function sidebar_position()
    {
        sidebar_resize();
        var y_scroll_pos = window.pageYOffset;
        // console.log(y_scroll_pos);
        if (sidebar_resize())
        {
            if (y_scroll_pos <= scroll_position1)
            {
                $("#apply-sidebar").css("position", "absolute");
                $("#apply-sidebar").css("top", apply_sidebar_position_top + "px");
                $("#apply-sidebar").css("left", apply_sidebar_position_left + "px");
            }
            else if (y_scroll_pos > scroll_position1 && y_scroll_pos < scroll_position2)
            {
                $("#apply-sidebar").css("position", "fixed");
                $("#apply-sidebar").css("top", apply_sidebar_position_top_gap + "px");
                $("#apply-sidebar").css("left", apply_sidebar_position_left + "px");
            }
            else if (y_scroll_pos >= scroll_position2)
            {
                $("#apply-sidebar").css("position", "absolute");
                $("#apply-sidebar").css("top", apply_sidebar_position_bot + "px");
                $("#apply-sidebar").css("left", apply_sidebar_position_left + "px");
            }
        }
        else
        {
            $("#apply-sidebar").css("position", "static");
        }
        console.log(body_text_content_offset_left);
        console.log(test1);
    };
    sidebar_position();

  $(window).on('scroll', sidebar_position);
  $(window).on('resize', sidebar_position);
  $('#apply-sidebar').on('resize', sidebar_position);
});