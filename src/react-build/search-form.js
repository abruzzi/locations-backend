var React = require('react/addons');

var SearchForm = React.createClass({displayName: "SearchForm",
  handleChange: function() {
    this.props.onSearch(
      this.refs.termText.getDOMNode().value
    );
  },

  render: function() {
    return (
      React.createElement("div", {className: "row searchForm"}, 
        React.createElement("div", {className: "large-9 medium-9 columns"}, 
          React.createElement("input", {type: "text", placeholder: "Type a location to search", 
          ref: "termText"})
        ), 
        React.createElement("div", {className: "large-3 medium-3 columns"}, 
          React.createElement("input", {type: "button", className: "submit button tiny", value: "search", 
          ref: "searchButton", 
          onClick: this.handleChange})
        )
      )
    );
  }
});

module.exports = SearchForm;
