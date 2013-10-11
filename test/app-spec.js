describe("listing application", function() {
    it("should send query from location when I click the search button", function() {
        var text = "Melbourne";

        $("#location").val(text);
        $("#search").trigger("click");
        
        var content = $("#content").html().trim();

        expect(content).toContain(text);
    });
});
