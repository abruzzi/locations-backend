var React = require('react/addons');
var HeadLine = require('./headline');
var SearchResult = require('./search-result');

var SearchResultList = React.createClass({displayName: "SearchResultList",
  render: function() {
    var list = [];
    var handleLike = this.props.handleLike;
    this.props.data.forEach(function(item) {
      list.push(React.createElement(SearchResult, {location: item, key: item.name, handleLike: handleLike}))
    });
    return (
      React.createElement("div", {className: "large-8 medium-8 columns searchResults"}, 
        React.createElement(HeadLine, {title: this.props.title}), 
        list
      )
    );
  }
});

module.exports = SearchResultList;
