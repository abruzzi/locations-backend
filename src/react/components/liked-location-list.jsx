var React = require('react/addons');
var HeadLine = require('./headline');
var LikedLocation = require('./liked-location');

var LikedLocationList = React.createClass({
  render: function() {
    var list = [];
    this.props.data.forEach(function(item) {
      list.push(<LikedLocation location={item} key={item.name} />)
    });
    return (
      <div className="large-4 medium-4 columns likedPlaces">
        <HeadLine title={this.props.title} />
        <ul>{list}</ul>
      </div>
    );
  }
});

module.exports = LikedLocationList;
