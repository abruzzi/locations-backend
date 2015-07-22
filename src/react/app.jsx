var HeadLine = React.createClass({
  render: function() {
    return (<h4>{this.props.title}</h4>);
  }
});

var LikedLocation = React.createClass({
  render: function() {
    return (<li className="like">{this.props.location}</li>);
  }
});

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

var Divider = React.createClass({
  render: function() {
    return (
      <div className="row">
        <hr className="large-12 columns" />
      </div>
    );
  }
});

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

var SearchLocationApp = React.createClass({
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
      <div>
        <SearchForm onSearch={this.handleSearch} />
        <Divider />
        <ResultPanel results={this.state.results} liked={this.state.liked} handleLike={this.handleLike} />
      </div>
    )
  }
});

React.render(<SearchLocationApp />, document.getElementById('container'));
