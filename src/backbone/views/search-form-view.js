var Backbone = require('backbone');
var $ = require('jquery');

var template = require('../templates/search-form-view.hbs');

module.exports = Backbone.View.extend({
    initialize: function(model) {
      this.model = model;
    },

    events: {
        'click .search': 'search'
    },

    search: function(e) {
      var self = this;
        var location = $(this.$el).find('input[name="location"]').val();
        $.ajax({
          url: 'http://locations-backend.herokuapp.com/locations?location=' + location,
          success: function(results) {
            self.model.set('locations', results);
          },
          error: function(error) {
            self.model.set('locations', []);
          }
        });
    },

    render: function() {
        var html = template(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
