var Like = function(element) {
    'use strict';
    this.$element = $(element);
    return this;
}

Like.prototype.add = function(item) {
    'use strict';
    var element = $('<li></li>', {text: item}).addClass('like');
    element.appendTo(this.$element);
}
