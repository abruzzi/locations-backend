var SearchResults = function(element) {
    this.$element = $(element);
    this.$element.on('click', '.like', _.bind(this._bindClick, this));
}

SearchResults.prototype._bindClick = function(e) {
    var name = $(e.target).closest('.title').find('span:nth(0)').text();
    $(document).trigger('like', [name]);
}

SearchResults.prototype.setResults = function(locations) {
    this.results = locations;
}

SearchResults.prototype.getResults = function () {
    return this.results;
}

SearchResults.prototype.render = function() {
    var template = $.get('/templates/location-detail.tmpl');
    var that = this;
    template.then(function(tmpl) {
        that._render(tmpl);
    });
}

SearchResults.prototype._render = function(tmpl) {
    var html = _.template(tmpl, {locations: this.results});
    this.$element.html(html);
}
