var SearchResults = function(element) {
    this.$element = $(element);
    this.$element.on('click', '.like', _.bind(this._bindClick, this));
}

SearchResults.prototype._bindClick = function(e) {
    var name = $(e.target).closest('.title').find('span:nth(0)').text();
    console.log(name);
    $(document).trigger('like', [name]);
}

SearchResults.prototype.setResults = function(locations) {
    var template = $.get('templates/location-detail.tmpl');
    var that = this;
    template.then(function(tmpl) {
        var html = _.template(tmpl, {locations: locations});
        that.$element.html(html);
    });
}
