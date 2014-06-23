var SearchResults = function(element) {
    'use strict';
    this.$element = $(element);
    this.$element.on('click', '.like', _.bind(this._bindClick, this));
}

SearchResults.prototype._bindClick = function(e) {
    'use strict';
    var name = $(e.target).closest('.panel').find('h5:nth(0)').text();
    $(document).trigger('like', [name]);
}

SearchResults.prototype.setResults = function(locations) {
    'use strict';
    this.results = locations;
}

SearchResults.prototype.getResults = function () {
    'use strict';
    return this.results;
}

SearchResults.prototype.render = function() {
    'use strict';
    var template = $.get('/templates/location-detail.tmpl');
    var that = this;
    template.then(function(tmpl) {
        that._render(tmpl);
    });
}

SearchResults.prototype._render = function(tmpl) {
    'use strict';
    var html = _.template(tmpl, {locations: this.results});
    this.$element.html(html);
}
