var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var SearchFormView = require('./search-form-view');
var SearchResultView = require('./search-result-view');
var LikedView = require('./liked-view');

module.exports =  Backbone.View.extend({
    initialize: function(model) {
      this.model = model;
    },

    render: function() {
      var searchForm = new SearchFormView(this.model);
      var searchResultPanel = new SearchResultView(this.model);
      var likedPanel = new LikedView(this.model);

      this.$el.append(searchForm.render());
      this.$el.append(searchResultPanel.render());
      this.$el.append(likedPanel.render());

      return this.$el;
    }
});
