var LocationModel = require('./models/location-model');
var SearchLocationView = require('./views/search-location-view');

var $ = require('jquery');

$(function() {
    var model = new LocationModel();
    var searchLocationView = new SearchLocationView(model);

    $("#container").append(searchLocationView.render());
});
