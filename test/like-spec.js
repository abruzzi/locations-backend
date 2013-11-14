describe("like list", function() {
    var ul;
    var like;

    beforeEach(function() {
        ul = $("<ul></ul>");
        like = new Like(ul);
    });

    it("should constructor a new list", function() {
        expect(like).toBeDefined();
    });

    it("should add new item", function() {
        like.add("juntao");
        expect(ul.find("li").length).toBe(1);
        expect(ul.find("li").eq(0).text()).toEqual("juntao");
    });
});

