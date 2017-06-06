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
    // Setting up links
    function setupSlickSlider() {
        [].forEach.call($(".slider-wrap .slick-slide"), function(item,index,array){
            var slickSliderLink = $(item).children("a").eq(0).attr("href");
            $(item).children("a").eq(1).attr("href", slickSliderLink);
        })
    }
    setupSlickSlider();
})