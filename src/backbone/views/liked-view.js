var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../templates/liked-view.hbs');

module.exports = Backbone.View.extend({
    initialize: function(model) {
      this.model = model;
      this.model.bind('change:liked', _.bind(this.render, this));
    },

    render: function() {
        var html = template(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
