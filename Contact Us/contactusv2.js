jQuery(document).ready(function ($) {
    $("div[role='main']").prepend($("#main-content"));
    $("#main-content").prepend($("#content"));
    $("#main-content").prepend($(".breadcrumb"));

    // declare hours here
    var deanHours = {
        'Monday': [[9,12.5],[13,16.5]],
        'Tuesday': [[9,12.5],[13,16.5]],
        'Wednesday': [[9,12.5],[13,16.5]],
        'Thursday': [[9,12.5],[13,16.5]],
        'Friday': [[9,12.5],[13,16.5]],
        'Saturday': 'Closed',
        'Sunday': 'Closed'
    }

    var convertDayToString = function(day) {
        switch(day) {
            case 0: 
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4: 
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
        }
    }

    var d = new Date();
    var year = d.getFullYear();
    var day = d.getDay();
    var month = d.getMonth();
    var hour = d.getHours();
    var minute = d.getMinutes();

    var isOpen = function(timeObject) {
        var hoursOpenToday = timeObject[convertDayToString(day)]
        if (hoursOpenToday === 'Closed') return false;
        var currentTime = hour + minute/60;
        // check if hours is split into two chunks or one
        if (hoursOpenToday[0].length === 2) {
            var morning = hoursOpenToday[0];
            var afternoon = hoursOpenToday[1];
            if ((currentTime > morning[0] && currentTime < morning[1]) || (currentTime > afternoon[0] && (currentTime < afternoon[1]))) return true;
        } 
        else {
            if (currentTime > hoursOpenToday[0] && currentTime < hoursOpenToday[1]) {
                return true;
            }
        } 
        return false;
    }






    minute = 0
    // test cases for Dean's office
    day = 0; // Sunday
    console.log("this should evaluate to FALSE", isOpen(deanHours));
    day = 6; // Saturday
    console.log("this should evaluate to FALSE", isOpen(deanHours));
    day = 1; // Monday
    hour = 0; 
    console.log("this should evaluate to FALSE", isOpen(deanHours));
    day = 5; // Friday
    hour = 0; 
    console.log("this should evaluate to FALSE", isOpen(deanHours));
    day = 1; // Friday
    hour = 8.9; 
    console.log("this should evaluate to FALSE", isOpen(deanHours));
    day = 1; // Monday 
    hour = 12.5; 
    console.log("this should evaluate to FALSE", isOpen(deanHours));
    day = 1; // Monday 
    hour = 16.5; 
    console.log("this should evaluate to FALSE", isOpen(deanHours));
    day = 1; // Monday 
    hour = 13; 
    console.log("this should evaluate to FALSE", isOpen(deanHours));
    day = 1; // Monday 
    hour = 9.1; 
    console.log("this should evaluate to TRUE", isOpen(deanHours));
    day = 1; // Monday 
    hour = 12.49; 
    console.log("this should evaluate to TRUE", isOpen(deanHours));
    day = 1; // Monday 
    hour = 13.01; 
    console.log("this should evaluate to TRUE", isOpen(deanHours));
    day = 1; // Monday 
    hour = 16.49; 
    console.log("this should evaluate to TRUE", isOpen(deanHours));
    day = 1; // Monday 
    hour = 14; 
    console.log("this should evaluate to TRUE", isOpen(deanHours));
});

