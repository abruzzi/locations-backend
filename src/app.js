var cache = {};

function getTemplate(template) {
    if(!cache[template]) {
        cache[template] = $.get("templates/" + template);
    }

    return cache[template];
}

$(function() {
    var loc = $("#locationInput");
    var searchResults = $("#searchResults ul");
    var liked = $("#likedPlaces ul");


    $("#searchButton").on("click", function() {
        var location = $.trim(loc.val());

        if(!location) {
            return;
        }

        $.ajax({
            url: '/locations/'+location,
            dataType: 'json',
            success: function(locations) {
                getTemplate('location-detail.tmpl').then(function(template) {
                    var tmpl = _.template(template);
                    searchResults.html(tmpl({locations: locations}));
                });
            },
            error: function(xhr, status, error) {
                console.log("err: " + error); 
            }
        });
    });

    searchResults.on('click', '.like', function() {
        var loc = $(this).closest('li').find('.title').text();
        liked.find('.empty').remove();
        $('<li>', {text: loc}).appendTo(liked);
    });

});

