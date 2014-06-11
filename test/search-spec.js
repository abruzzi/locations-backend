describe("search async", function() {
    var search;

    beforeEach(function() {
        spyOn($, 'ajax').andCallFake(function(e) {
          return {
            then: function(){}
          }
        });

        search = new Search();
    });

    it("should create new search", function() {
        expect(search).toBeDefined();
    });

    it("should fetch data from remote", function() {
        var r = search.fetch("Melbourne");
        expect($.ajax).toHaveBeenCalled();
        expect($.ajax.mostRecentCall.args[0]).toContain("Melbourne");;
    });


});
