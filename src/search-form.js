var SearchForm = function(form) {
    'use strict';
    this.$element = $(form);
    this.$element.on('click', '.submit', _.bind(this._bindSubmit, this));
}

SearchForm.prototype._bindSubmit = function() {
    'use strict';
    var text = this.$element.find('input[type="text"]').val();
    $(document).trigger('search', [text]);
}
