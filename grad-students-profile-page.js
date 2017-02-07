jQuery(document).ready(function ($) {
    var grad_student_profile_count;
    var grad_student_profile_rows;
    var row_name;
    var row_number;
    var index;
    var j;
    $('.entry-content').attr('id','grad_student_profile').addClass('row-fluid');
    $('#grad_student_profile > p').remove();
    grad_student_profile_count = $('#grad_student_profile div.span4').length;
    grad_student_profile_rows = Math.floor(grad_student_profile_count/3) + 1;
    for (index=0;index<grad_student_profile_count;index++)
    {
        row_name = 'profile_row' + Math.floor(index/3).toString();
        $('#grad_student_profile div.span4').eq(index).addClass(row_name);
        console.log(row_name);
    }
    for (j=0;j<grad_student_profile_rows;j++)
    {
        row_number = 'profile_row' + j.toString();
        $('#grad_student_profile > .' + row_number).wrapAll('<div class="span12"></div>');
        $('#grad_student_profile > div.span12').eq(j).children('div.span4').eq(0).css('margin-left','0px');
    }
    $('#grad_student_profile > div.span12').css('margin-left','0px');
    //$('#grad_student_profile > div.span12 > div.span4').eq(0).css('margin-left','0px');
    console.log(grad_student_profile_count);
    console.log(grad_student_profile_rows);
});