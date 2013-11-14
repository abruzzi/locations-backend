var SearchForm = function(form) {
    this.$element = $(form);
    console.log(form);
    this.$element.on('click', '.submit', _.bind(this._bindSubmit, this));
}

SearchForm.prototype._bindSubmit = function(e) {
    var text = this.$element.find('input[type="text"]').val();
    $(document).trigger('search', [text]);
}
