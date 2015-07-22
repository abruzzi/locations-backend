var React = require('react/addons');
var SearchForm = require('./search-form');
var Divider = require('./divider');
var ResultPanel = require('./result-panel');

var SearchLocationApp = React.createClass({displayName: "SearchLocationApp",
  getInitialState: function() {
      return {
        results: [],
        liked: []
      }
  },

  handleSearch: function(term) {
    var that = this;
    $.get('/locations?location='+term).done(function(data) {
      that.setState({
        results: data
      })
    });
  },

  handleLike: function(item) {
    var liked = this.state.liked;
    liked.push(item);
    this.setState({
      liked: liked
    });
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(SearchForm, {onSearch: this.handleSearch}), 
        React.createElement(Divider, null), 
        React.createElement(ResultPanel, {results: this.state.results, liked: this.state.liked, handleLike: this.handleLike})
      )
    )
  }
});

module.exports = SearchLocationApp;
