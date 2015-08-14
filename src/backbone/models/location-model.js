var Backbone = require('backbone');
var _ = require('lodash');

module.exports = Backbone.Model.extend({
  defaults: {
    locations: [],
    liked: []
  },

  initialize: function(model) {
    this.bind('change:locations', this.rehash);
  },

  rehash: function() {
    var locations = this.get('locations');
    this.set('locations', _.map(locations, function(item) {
        return _.extend(item, {id: _.uniqueId('loc_'), liked: false});
    }));
  }
});
