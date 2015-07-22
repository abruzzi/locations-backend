var React = require('react/addons');
var SearchResultList = require('./search-result-list');
var LikedLocationList = require('./liked-location-list');

var ResultPanel = React.createClass({
  render: function() {
    return (
      <div className="row">
        <SearchResultList data={this.props.results} title="Search Results" handleLike={this.props.handleLike}/>
        <LikedLocationList data={this.props.liked} title="Liked Locations" />
      </div>
    );
  }
});

module.exports = ResultPanel;
