var React = require('react/addons');

var SearchForm = React.createClass({
  handleChange: function() {
    this.props.onSearch(
      this.refs.termText.getDOMNode().value
    );
  },

  render: function() {
    return (
      <div className="row searchForm">
        <div className="large-9 medium-9 columns">
          <input type="text" placeholder="Type a location to search"
          ref="termText"/>
        </div>
        <div className="large-3 medium-3 columns">
          <input type="button" className="submit button tiny" value="search"
          ref="searchButton"
          onClick={this.handleChange} />
        </div>
      </div>
    );
  }
});

module.exports = SearchForm;
