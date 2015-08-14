var Backbone = require('backbone');
var _ = require('lodash');
var $ = require('jquery');

var template = require('../templates/search-result-view.hbs');

module.exports = Backbone.View.extend({
    initialize: function(model) {
      this.model = model;
      this.model.bind('change:locations', _.bind(this.render, this));
    },

    events: {
      'click .like': 'like'
    },

    like: function(event) {
      event.preventDefault();

      var id = $(event.currentTarget).data('id');
      var collection = this.model.get('locations');

      var current = _.first(_.where(collection, {'id': id}));
      current.liked = !current.liked;

      var liked = _.select(collection, {'liked': true});

      this.model.set('liked', liked);
    },

    render: function() {
        var html = template(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
