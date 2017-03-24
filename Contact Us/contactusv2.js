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

   // Jon added

    var UTChour = d.getUTCHours ();
    var difference = 8;

    var isPST = function() {
        // create new variable because I don't want to alter the UTC time
        var UTChr = UTChour;
        // check to see if it is currently daylight savings to see whether it should be 8 or 7 hours
        isDaylightSaving() ? difference-- : difference;
        
        /* if the current UTC time is less than 8 then add 24 to the number so that we can make the comparison with user's computer time
           can't find the difference between eg. 3 and 19 (UTChour and hour) */
        if (UTChr < difference) {
            UTChr += 24;
        }
        /* if the user is in the PST time zone, then we can run the function(s) that will display the circle beside the correct day, 
        otherwise just display circle beside the Office Hour header */
        if ((UTChr - hour) === difference){
            isOpen();
        } else {
            CheckOpenClosed();
        }
    }

    // end of code that Jon added

    var isOpen = function(timeObject) {
        var hoursOpenToday = timeObject[convertDayToString(day)];
        if (hoursOpenToday === 'Closed') return false;
        var currentTime = hour + minute/60;
        // check if hours is split into two chunks or one
        if (hoursOpenToday[0].length === 2) {
            var morning = hoursOpenToday[0];
            var afternoon = hoursOpenToday[1];
            if ((currentTime > morning[0] && currentTime < morning[1]) || (currentTime > afternoon[0] && (currentTime < afternoon[1]))) return true;
        } 
        else if (currentTime > hoursOpenToday[0] && currentTime < hoursOpenToday[1]) return true;
        return false;
    }











    // test cases for Dean's office
    minute = 0;    
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

