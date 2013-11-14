describe("search async", function() {
    var search;

    beforeEach(function() {
        search = new Search();    
    });

    it("should create new search", function() {
        expect(search).toBeDefined();
    });

    it("should fetch data from remote", function() {
        var r = search.fetch("Melbourne");
        expect(r.then).toBeDefined();
        // expect($.ajax.mostRecentCall.args[0]).toEqual('Mel');
    });
});

