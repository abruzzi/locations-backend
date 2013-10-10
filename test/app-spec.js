jasmine.getFixtures().fixturesPath = "base";

describe("listing application", function() {
    beforeEach(function() {
        loadFixtures("test/fixtures/index.html");
    });
    it("should send query from location when I click the search button", function() {
        var location = $("#location");
        var search = $("#search");

        location.val("Melborune");
        search.click();
        
        var content = $("#content");

        expect(content.html().trim()).toContainHtml("Melborune"); 
    });
});
