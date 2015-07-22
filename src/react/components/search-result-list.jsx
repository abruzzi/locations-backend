var React = require('react/addons');
var HeadLine = require('./headline');
var SearchResult = require('./search-result');

var SearchResultList = React.createClass({
  render: function() {
    var list = [];
    var handleLike = this.props.handleLike;
    this.props.data.forEach(function(item) {
      list.push(<SearchResult location={item} key={item.name} handleLike={handleLike}/>)
    });
    return (
      <div className="large-8 medium-8 columns searchResults">
        <HeadLine title={this.props.title} />
        {list}
      </div>
    );
  }
});

module.exports = SearchResultList;
