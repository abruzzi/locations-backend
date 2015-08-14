var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');

var SearchResultView = require('../../src/backbone/views/search-result-view');

describe("SearchResultView", function() {
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
    var view = new SearchResultView(model);
    expect(view.model).toBe(model);
  });

  describe("#render", function() {
    var locations;
    beforeEach(function() {
      locations = [
        {"id": 1, "name": "Melbourne", "description": "Melbourne", "liked": false}
      ];
    })

    it("render an empty list", function() {
      var model = new Backbone.Model({"locations": []});
      var view = new SearchResultView(model);

      var html = view.render();
      expect(html.find("h4")).toContainText("Search Results");
      expect(html.find("li").length).toEqual(0);
    });

    it("render an non empty list", function() {
      var model = new Backbone.Model({"locations": locations});
      var view = new SearchResultView(model);

      var html = view.render();
      expect(html.find("li").length).toEqual(1);

      var first  = html.find("li").first();
      expect(first.find("h4")).toContainText("Melbourne");
    });

    it("like button is clicked", function() {
      var model = new Backbone.Model({"locations": locations});
      var view = new SearchResultView(model);

      var html = view.render();

      var liked =  _.select(model.get('locations'), {'liked': true})[0];
      expect(liked).toBeUndefined();

      var first  = html.find("li").first();
      first.find(".like").trigger("click");

      liked =  _.select(model.get('locations'), {'liked': true})[0];

      expect(liked.name).toEqual("Melbourne");
      expect($.trim(liked.description)).toEqual("Melbourne");
    });

    it("toggle like/unlike button", function() {
      var model = new Backbone.Model({"locations": locations});
      var view = new SearchResultView(model);

      var html = view.render();

      var first  = html.find("li").first();
      expect($.trim(first.find(".like").text())).toEqual("like");

      first.find(".like").trigger("click");

      first  = html.find("li").first();
      expect($.trim(first.find(".like").text())).toEqual("unlike");
    });
  });


});
