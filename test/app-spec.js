describe("search location", function() {

    it("should return locations based on the search critria", function() {
        $("#locationInput").val("Melbourne");
        $("#searchButton").click();

        waitsFor(function() {
            return $("#searchResults ul li").length > 0; 
        }, 2000);

        runs(function() {
            expect($("#searchResults ul li").length).toEqual(4);
            expect($("#likedPlaces ul li").length).toEqual(0);
        });
    });
});

