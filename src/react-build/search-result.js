var React = require('react/addons');

var SearchResult = React.createClass({displayName: "SearchResult",
  handleLike: function() {
    this.props.handleLike(this.refs.locationName.getDOMNode().textContent);
  },

  render: function() {
    return (
      React.createElement("div", {className: "panel large-12 columns"}, 
        React.createElement("h5", {ref: "locationName"}, this.props.location.name), 
        React.createElement("p", null, this.props.location.description), 
        React.createElement("a", {href: "#", className: "like button tiny right", onClick: this.handleLike}, "Like")
      )
    );
  }
});

module.exports = SearchResult;
