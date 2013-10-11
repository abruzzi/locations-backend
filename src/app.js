$(function() {
    var loc = $("#location");
    var content = $("#content");

    $("#search").on("click", function() {
        var text = loc.val();

        $.ajax({
            url: '/locations.json',
            dataType: 'json',
            data: {"location": text},
            success: function(locations) {
                var content = $("#content ul");
                for(var loc in locations) {
                    var li = $("<li/>").html(locations[loc].name);
                    li.appendTo(content);
                }
            },
            error: function(xhr, status, error) {
                console.log("err: " + error); 
            }
        });
    });
});

