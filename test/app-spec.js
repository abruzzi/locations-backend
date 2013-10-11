describe("listing application", function() {

    beforeEach(function() {
        $("#content ul").empty(); 
    });

    it("should get all locations when I just click the search button", function() {
        $("#search").trigger("click");
        
        waitsFor(function() {
            return $("#content ul").find("li").length > 0;
        }, 2000);

        runs(function() {
            expect($("#content ul").find("li").length).not.toEqual(0);
        });
    });

});
