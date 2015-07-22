var React = require('react/addons');

var LikedLocation = React.createClass({displayName: "LikedLocation",
  render: function() {
    return (React.createElement("li", {className: "like"}, this.props.location));
  }
});

module.exports = LikedLocation;