var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../templates/liked-view.hbs');

module.exports = Backbone.View.extend({
    initialize: function(model) {
      this.model = model;
      this.model.bind('change:locations', _.bind(this.render, this));
    },

    render: function() {
      var collection = this.model.get('locations');
      var locations = _.select(collection, {'liked': true});
      var html = template({'liked': locations});

      this.$el.html(html);

      return this.$el;
    }
});
