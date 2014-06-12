describe("search results", function() {
    var ul;
    var searchResults;

    var results = [
        {name: "Richmond"},
        {name: "Melbourne"},
        {name: "Dockland"}
    ];

    beforeEach(function() {
        ul = $("<ul></ul>");
        searchResults = new SearchResults(ul);
    });

    it("should constructor a new search result", function() {
        expect(searchResults).toBeDefined();
    });

    it("should set/get search result", function() {
        searchResults.setResults(results);
        var res = searchResults.getResults();
        expect(res.length).toEqual(3);
    });

    it("should load tempalte when render search results", function() {
        spyOn($, 'ajax').andCallFake(function(e) {
            return {
                then: function() {}
            };
        });

        searchResults.setResults(results);
        searchResults.render();

        expect($.ajax.mostRecentCall.args[0].url).toEqual('/templates/location-detail.tmpl');
    });
});
