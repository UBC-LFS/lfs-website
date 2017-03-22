jQuery(document).ready(function ($) {
        // var imag = new Image();
        var imag = document.createElement('img');
        // imag.onload = function() {
        //     document.getElementById('imageLoad').src = imag.src;
        // };
        imag.src = "http://lfs-sbcollab.sites.olt.ubc.ca/files/2017/03/5767665-nature-4k-wallpaper.jpg"
        imag.onload = function() {
            document.getElementById('imageLoad').src = imag.src;
        };
        console.log(imag);
});