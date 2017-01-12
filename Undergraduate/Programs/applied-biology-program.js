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
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    if (!isMobile()) {
        var navbar_position = $(".sticky-nav").offset().top;
        $(window).on('scroll', function () {
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
    }
});