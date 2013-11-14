$(function() {
    var searchForm = new SearchForm("#searchForm");
    var searchResults = new SearchResults("#searchResults ul");
    var liked = new Like("#likedPlaces ul");
    var search = new Search();

    $(document).on('search', function(event, query) {
        search.fetch(query).then(function(locations) {
            searchResults.setResults(locations);
        }); 
    });

    $(document).on('like', function(e, name) {
        liked.add(name);
    });
});
