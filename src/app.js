$(function() {
    var loc = $("#location");
    var content = $("#content");

    $("#search").on("click", function() {
        var text = loc.val();
        content.html(text);
    });
});
