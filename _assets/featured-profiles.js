jQuery(document).ready(function ($) {
    var IDs = $("#featured div[id]")         
    .map(function() { return this.id; })
    .get();

    console.log(IDs);

    for (i = 0; i<IDs.length; i++) {
        var span4 = '<div class="span4"' + 'id="span4-' + i + '"' + '></div>';
        if (i%3===0) {
            var span12= '<div class="span12"' + 'id="span12-' + Math.floor(i/3) + '"' + '></div>';
            $("#featured").append(span12);
            //span12= '<div class="span12"' + 'id="span12-' + i + '"' + '></div>';
        }
        var span12id = "#span12-" + Math.floor(i/3);
        var span4id = "#span4-" + i;
        var profileID = "#" + IDs[i];

        $(span12id).append(span4);
        $(span4id).append($(profileID));
    }
});
