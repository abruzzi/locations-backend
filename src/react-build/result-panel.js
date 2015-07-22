var React = require('react/addons');
var SearchResultList = require('./search-result-list');
var LikedLocationList = require('./liked-location-list');

var ResultPanel = React.createClass({displayName: "ResultPanel",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement(SearchResultList, {data: this.props.results, title: "Search Results", handleLike: this.props.handleLike}), 
        React.createElement(LikedLocationList, {data: this.props.liked, title: "Liked Locations"})
      )
    );
  }
});

module.exports = ResultPanel;
