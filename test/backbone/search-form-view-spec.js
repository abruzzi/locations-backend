var Backbone = require('backbone');
var $ = require('jquery');

var SearchForm = require('../../src/backbone/views/search-form-view');

describe("SearchFormView", function() {
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
    var view = new SearchForm(model);
    expect(view.model).toBe(model);
  });

  describe("#render", function() {
    it("default form", function() {
      var model = new Backbone.Model({"locations": []});
      var view = new SearchForm(model);

      var html = view.render();
      expect(html.find("input").length).toEqual(2);
    });

    it("perform a search request", function() {
      var model = new Backbone.Model({"locations": []});
      var view = new SearchForm(model);

      var html = view.render();
      spyOn($, 'ajax');

      html.find("input[name='location']").val("Melbourne");
      html.find(".search").trigger("click");

      expect($.ajax).toHaveBeenCalled();
      expect($.ajax.mostRecentCall.args[0].url).toContain('Melbourne');
    });

  });


});
