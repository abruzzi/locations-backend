var React = require('react/addons');

var SearchResult = React.createClass({
  handleLike: function() {
    this.props.handleLike(this.refs.locationName.getDOMNode().textContent);
  },

  render: function() {
    return (
      <div className="panel large-12 columns">
        <h5 ref="locationName">{this.props.location.name}</h5>
        <p>{this.props.location.description}</p>
        <a href="#" className="like button tiny right" onClick={this.handleLike}>Like</a>
      </div>
    );
  }
});

module.exports = SearchResult;
