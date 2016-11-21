jQuery(document).ready(function ($) {
    var IDs = $("#featured div[id]")         
    .map(function() { return this.id; })
    .get();
    console.log(IDs);
});
