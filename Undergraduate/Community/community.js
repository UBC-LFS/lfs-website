jQuery(document).ready(function ($) {
    $('.undergraduate-profile-slider').slick({
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
    $('.events').slick({
        slide: 'li',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.event-prev'),
        nextArrow: $('.event-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
    function eventsTouchEvents() {
        var event_link_remove = false;
        $('#upcoming-events .event-wrap').on('click touchstart', function(event){
            var event_link_copy = $(this).children('a.event-link-copy').attr('href');
            if (event.type === 'touchstart')
            {
                $(this).children('a.event-link').removeAttr('href');
                event_link_remove = true;
            }
            if (event.type === 'click')
            {
                if (event_link_remove === false)
                {
                    $(this).children('a.event-link').attr('href', event_link_copy);
                }
                event_link_remove = false;
            }
        });
    }
    eventsTouchEvents();
    // Setting up links
    function setupSlickSlider() {
        [].forEach.call($(".slider-wrap .slick-slide"), function(item,index,array){
            var slickSliderLink = $(item).children("a").eq(0).attr("href");
            $(item).children("a").eq(1).attr("href", slickSliderLink);
        })
    }
    setupSlickSlider();

    // var countClick = 0
    // document.getElementById('collapseButton').onclick = function() {
    //     if (countClick%2 === 0) {
    //         document.getElementById('collapseButton').innerHTML = 'Show Less <i class="fa fa-caret-up" aria-hidden="true"></i>'
    //         countClick++
    //     } else {
    //         document.getElementById('collapseButton').innerHTML = 'Show More <i class="fa fa-caret-down" aria-hidden="true"></i>'
    //         countClick++
    //     }
    // }
    $('#collapseButton').on('hide.bs.collapse', function() {
        document.getElementById('collapseButton').innerHTML = 'Show More <i class="fa fa-caret-down" aria-hidden="true"></i>'
    })
    $('#collapseButton').on('show.bs.collapse', function() {
        document.getElementById('collapseButton').innerHTML = 'Show Less <i class="fa fa-caret-up" aria-hidden="true"></i>'
    })

})