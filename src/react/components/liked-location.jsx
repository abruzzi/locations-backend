var React = require('react/addons');

var LikedLocation = React.createClass({
  render: function() {
    return (<li className="like">{this.props.location}</li>);
  }
});

module.exports = LikedLocation;