$(function() {
    var searchForm = new SearchForm("#searchForm");
    var searchResults = new SearchResults("#searchResults ul");

    var liked1 = new Like("#likedPlaces1 ul");
    var liked2 = new Like("#likedPlaces2 ul");

    var search = new Search();

    $(document).on('search', function(event, query) {
        search.fetch(query).then(function(locations) {
            searchResults.setResults(locations);
        });
    });

    $(document).on('like', function(e, name) {
        liked1.add(name);
        liked2.add(name);
    });
});
