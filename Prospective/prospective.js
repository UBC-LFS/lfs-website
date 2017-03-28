jQuery(document).ready(function ($) {
    // Slick Slider
    $('.prospective-profile-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        swipe:true,
        arrows: true,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
        responsive: [
            {
                breakpoint: 1024,
                setting: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                setting: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                setting: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // function setupSlickSlider() {
    //     var profileSliderHeight = $('.prospective-profile-slider').eq(0).height();
    //     console.log(profileSliderHeight);
    // }
    // setupSlickSlider();
    
    $(".featured-person").each(function (index) {
        $(this).addClass("index-" + Math.floor(index / 3));
    });
    var numberOfProfiles = $('.featured-person').length;
    var span12 = '<div class="span12" style="margin-left: 0;"></div>';
    for (i = 0; i <= numberOfProfiles; i++) {
        if (i % 3 === 0) {
            $('.index-' + Math.floor(i / 3)).wrapAll(span12);
        }
    }

    var animated = false;
    var top_height_to_counter = $("#ranking-world").offset().top;

    function count_down_detect() {
        var y_scroll_pos = window.pageYOffset + $(window).height() - $("#ranking-world").height() * 2 / 3;
        var y_scroll_pos2 = window.pageYOffset - $("#ranking-world").height() * 2 / 5;
        if (y_scroll_pos > top_height_to_counter && y_scroll_pos2 < top_height_to_counter && !animated) {
            var rankingWorld = new CountUp('ranking-world', 100, 25);
            var rankingCanada = new CountUp('ranking-canada', 100, 2, 0, 3);
            $('#ranking-world').scroll(rankingWorld.start());
            $('#ranking-canada').scroll(rankingCanada.start());
            animated = true;
        }
    }
    count_down_detect();
    $(window).on('scroll', count_down_detect);

    var profile_count;
    var tab_count = $('#staff-profile > div.featured-group').length;
    var index;
    var indexj;
    var profile_src;
    var profile_target;
    for (indexj = 0; indexj < tab_count; indexj++) {
        profile_count = document.getElementById('staff-profile').getElementsByClassName('featured-group')[indexj].getElementsByClassName('featured-person').length;
        for (index = 0; index < profile_count; index++) {
            profile_src = document.getElementById('staff-profile').getElementsByClassName('featured-group')[indexj].getElementsByClassName('featured-person')[index].getElementsByTagName('a')[0].href;
            document.getElementById('staff-profile').getElementsByClassName('featured-group')[indexj].getElementsByClassName('featured-person')[index].getElementsByTagName('a')[1].setAttribute('href', profile_src);
        }
    }

    function showFaculty() {
        console.log("showFaculty function triggered");
    }

    // animate scroll to ids
    $("#admissions-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#admissions").offset().top
        }, 1000);
    });
    $("#degree-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#degree-at-a-glance").offset().top
        }, 1000);
    });
    $("#outcomes-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#outcomes").offset().top
        }, 1000);
    });

    function alert_append()
    {
        var web_alert_display_check = false;    //checks if webpage has alerts
        var page_alert_count = 0;

        function page_alert_counter() {
            var page_alert_p_count = $('p.alert-text').length;
            var page_alert_text = $('p.alert-text');
            var page_alert_text_count = 0;
            var page_alert_num = 0;

            for (k=0; k<page_alert_p_count; k++)
            {
                page_alert_text_count = $.trim(page_alert_text.eq(k).text()).length;
                if (page_alert_text_count > 0)
                {
                    page_alert_num++;
                }
            }
            return page_alert_num;
        }
        page_alert_count = page_alert_counter();

        function page_alert_checker() {
            var alert_text = '';
            var i = 0;  // counter used for cloning additional page-alerts if page has more than 1 alert
            var j = 0;  // counter used to count for the page-alert boxes
            var k = 0;  // counter used to count through p.alert-text tags

            if (page_alert_count > 0)
            {
                web_alert_display_check = true;

                // if there is more than 1 page-alert, clone the additional page alerts
                for (i=1; i<page_alert_count; i++)
                {
                    $('.website-alerts-container .page-alert').eq(0).clone().appendTo('.website-alerts-container');
                }

                // appends text to page-alert box
                // this block of code prevents bugs that could occur if user deletes alert-1 and starts at alert-2
                for (k=0; k<$('p.alert-text').length; k++)
                {
                    if ($.trim($('p.alert-text').eq(k).text()).length > 0)
                    {
                        alert_text = $('p.alert-text').eq(k).text();
                        $('.website-alerts-container .page-alert .website-content-text').eq(j).text(alert_text);
                        j++
                    }
                    if (j >= page_alert_count)
                    {
                        break;
                    }
                }
            }

            else
            {
                $('.website-alerts-container .page-alert').remove();
            }
            $('.website-alert-texts').remove();
        }
        page_alert_checker();

        function website_alert_styling() {
            if ($('.website-alert').length > 0)
            {
                $('.website-alerts-container').css('padding-bottom', '5px');
            }
            if (web_alert_display_check === true)
            {
                $('.website-alerts-container').css('display', 'block');
            }
        }
        website_alert_styling();
    }
    alert_append();
    
    $('.close').click(function(){
        $(this).parents('.website-alert').animate({height: "0px"}, function() {
            this.remove();
            if ($('.website-alert').length === 0)
            {
                $('.website-alerts-container').animate({padding: "0px"}, function() {
                    $('.website-alerts-container').remove();
                });
            }
        });
    });

    function alert_position()
    {
        var page_content_width;
        var website_alert_container_left;
        page_content_width = $('#main-content').width();
        $('.website-alerts-container').css('width', page_content_width+'px');

        website_alert_container_left = ($('#main-content').outerWidth(true) - $('#main-content').width())/2;
        $('.website-alerts-container').css('left',website_alert_container_left+'px');
    }
    alert_position();

    function timeOutFncCall()
    {
        alert_position();
    }

    $(window).on('resize',function () {
        setTimeout(timeOutFncCall, 100);
    });
});


/*

    countUp.js
    by @inorganik

*/

// target = id of html element or var of previously selected html element where counting occurs
// startVal = the value you want to begin at
// endVal = the value you want to arrive at
// decimals = number of decimal places, default 0
// duration = duration of animation in seconds, default 2
// options = optional object of options (see below)

var CountUp = function (target, startVal, endVal, decimals, duration, options) {

    // make sure requestAnimationFrame and cancelAnimationFrame are defined
    // polyfill for browsers without native support
    // by Opera engineer Erik Möller
    var lastTime = 0;
    var vendors = ['webkit', 'moz', 'ms', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }

    var self = this;

    // default options
    self.options = {
        useEasing: true, // toggle easing
        useGrouping: true, // 1,000,000 vs 1000000
        separator: ',', // character to use as a separator
        decimal: '.', // character to use as a decimal
        easingFn: null, // optional custom easing closure function, default is Robert Penner's easeOutExpo
        formattingFn: null // optional custom formatting function, default is self.formatNumber below
    };
    // extend default options with passed options object
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            self.options[key] = options[key];
        }
    }
    if (self.options.separator === '') {
        self.options.useGrouping = false;
    }
    if (!self.options.prefix) self.options.prefix = '';
    if (!self.options.suffix) self.options.suffix = '';

    self.d = (typeof target === 'string') ? document.getElementById(target) : target;
    self.startVal = Number(startVal);
    self.endVal = Number(endVal);
    self.countDown = (self.startVal > self.endVal);
    self.frameVal = self.startVal;
    self.decimals = Math.max(0, decimals || 0);
    self.dec = Math.pow(10, self.decimals);
    self.duration = Number(duration) * 1000 || 2000;

    self.formatNumber = function (nStr) {
        nStr = nStr.toFixed(self.decimals);
        nStr += '';
        var x, x1, x2, rgx;
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? self.options.decimal + x[1] : '';
        rgx = /(\d+)(\d{3})/;
        if (self.options.useGrouping) {
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
            }
        }
        return self.options.prefix + x1 + x2 + self.options.suffix;
    };
    // Robert Penner's easeOutExpo
    self.easeOutExpo = function (t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    };

    self.easingFn = self.options.easingFn ? self.options.easingFn : self.easeOutExpo;
    self.formattingFn = self.options.formattingFn ? self.options.formattingFn : self.formatNumber;

    self.version = function () {
        return '1.7.1';
    };

    // Print value to target
    self.printValue = function (value) {
        var result = self.formattingFn(value);

        if (self.d.tagName === 'INPUT') {
            this.d.value = result;
        } else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') {
            this.d.textContent = result;
        } else {
            this.d.innerHTML = result;
        }
    };

    self.count = function (timestamp) {

        if (!self.startTime) {
            self.startTime = timestamp;
        }

        self.timestamp = timestamp;
        var progress = timestamp - self.startTime;
        self.remaining = self.duration - progress;

        // to ease or not to ease
        if (self.options.useEasing) {
            if (self.countDown) {
                self.frameVal = self.startVal - self.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
            } else {
                self.frameVal = self.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
            }
        } else {
            if (self.countDown) {
                self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
            } else {
                self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
            }
        }

        // don't go past endVal since progress can exceed duration in the last frame
        if (self.countDown) {
            self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
        } else {
            self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
        }

        // decimal
        self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;

        // format and print value
        self.printValue(self.frameVal);

        // whether to continue
        if (progress < self.duration) {
            self.rAF = requestAnimationFrame(self.count);
        } else {
            if (self.callback) {
                self.callback();
            }
        }
    };
    // start your animation
    self.start = function (callback) {
        self.callback = callback;
        self.rAF = requestAnimationFrame(self.count);
        return false;
    };
    // toggles pause/resume animation
    self.pauseResume = function () {
        if (!self.paused) {
            self.paused = true;
            cancelAnimationFrame(self.rAF);
        } else {
            self.paused = false;
            delete self.startTime;
            self.duration = self.remaining;
            self.startVal = self.frameVal;
            requestAnimationFrame(self.count);
        }
    };
    // reset to startVal so animation can be run again
    self.reset = function () {
        self.paused = false;
        delete self.startTime;
        self.startVal = startVal;
        cancelAnimationFrame(self.rAF);
        self.printValue(self.startVal);
    };
    // pass a new endVal and start animation
    self.update = function (newEndVal) {
        cancelAnimationFrame(self.rAF);
        self.paused = false;
        delete self.startTime;
        self.startVal = self.frameVal;
        self.endVal = Number(newEndVal);
        self.countDown = (self.startVal > self.endVal);
        self.rAF = requestAnimationFrame(self.count);
    };

    // format startVal on initialization
    self.printValue(self.startVal);
};