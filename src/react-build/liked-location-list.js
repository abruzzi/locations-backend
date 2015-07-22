var React = require('react/addons');
var HeadLine = require('./headline');
var LikedLocation = require('./liked-location');

var LikedLocationList = React.createClass({displayName: "LikedLocationList",
  render: function() {
    var list = [];
    this.props.data.forEach(function(item) {
      list.push(React.createElement(LikedLocation, {location: item, key: item.name}))
    });
    return (
      React.createElement("div", {className: "large-4 medium-4 columns likedPlaces"}, 
        React.createElement(HeadLine, {title: this.props.title}), 
        React.createElement("ul", null, list)
      )
    );
  }
});

module.exports = LikedLocationList;
