var Like = function(element) {
    this.$element = $(element);
    return this;
}

Like.prototype.add = function(item) {
    var element = $("<li></li>", {text: item}).addClass('like');
    element.appendTo(this.$element);
}
