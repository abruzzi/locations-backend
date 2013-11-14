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

    it("should set search result", function() {
        searchResults.setResults(results);

        waitsFor(function() {
            return ul.find("li").length > 0; 
        }, 1000);

        runs(function() {
            expect(ul.find("li").length).toBe(3);
            var location = $.trim(ul.find("li").eq(0).find(".title").text());
            expect(location).toEqual("Richmond");
        });
    });

    it("should like one of the search results", function() {
        searchResults.setResults(results);

        var spy = jasmine.createSpy();
        $(document).on('like', spy);

        waitsFor(function() {
            return ul.find("li").length > 0; 
        }, 1000);

        runs(function() {
            ul.find('li').first().find('.like').click();
            expect(spy).toHaveBeenCalled();
        });
    });
});

