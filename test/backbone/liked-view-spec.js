var Backbone = require('backbone');
var $ = require('jquery');

var LikedView = require('../../src/backbone/views/liked-view');

describe("LikedView", function() {
  beforeEach(function() {
    this.addMatchers({
       toContainText: function () {
         return {
           compare: function (actual, text) {
             var trimmedText = $.trim($(actual).text())

             if (text && $.isFunction(text.test)) {
               return { pass: text.test(trimmedText) }
             } else {
               return { pass: trimmedText.indexOf(text) != -1 }
             }
           }
         }
       }
     });
  });
  
  it("#initialize", function() {
    var model = new Backbone.Model([]);
    var view = new LikedView(model);
    expect(view.model).toBe(model);
  });

  describe("#render", function() {
    var locations = [
      {"name": "Melbourne", "description": "Melbourne"}
    ];

    it("render an empty list", function() {
      var model = new Backbone.Model({"liked": []});
      var view = new LikedView(model);

      var html = view.render();
      expect(html.find("h4")).toContainText("Locations I liked");
      expect(html.find("ul li").length).toEqual(0);
    });

    it("render an non empty list", function() {
      var model = new Backbone.Model({"liked": locations});
      var view = new LikedView(model);

      var html = view.render();
      expect(html.find("h4")).toContainText("Locations I liked");
      expect(html.find("ul li").length).toEqual(1);

      var first = html.find("ul li").first();
      expect(first).toContainText("Melbourne");
    });

  });

});
