jQuery(document).ready(function ($) {
    var IDs = $("#featured div[id]")         
    .map(function() { return this.id; })
    .get();

    console.log(IDs);

    var span12 = "<div class='span12' id='span12-0'></div>";
    for (i = 0; i<IDs.length; i++) {
        var span4 = '<div class="span4"' + 'id="span4-' + i + '"' + '></div>';
        if (i===0) {
            $("#featured").append(span12)
        }
        else if (i%3===0) {
            span12= '<div class="span12"' + 'id="span12-' + i + '"' + '></div>';
        }
        var span12id = "#span12-" + i;
        var span4id = "#span4-" + i;
        var id = "#" + IDs[i];

        $("#span12-0").append(span4);
        $(span4id).append($(id));

        //$(span4id).append($(IDs[i]));
    }
});
