$(function() {
    'use strict';

    var searchForm = new SearchForm('#searchForm');
    var searchResults = new SearchResults('#results');
    var liked = new Like('#likedPlaces nav ul');
    var search = new Search();

    $(document).on('search', function(event, query) {
        search.fetch(query).then(function(locations) {
            searchResults.setResults(locations);
            searchResults.render();
        });
    });

    $(document).on('like', function(e, name) {
        liked.add(name);
    });
});
