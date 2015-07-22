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
    return (
      <div className="large-4 medium-4 columns" id="likedPlaces" >
        <HeadLine title={this.props.title} />
      </div>
    );
  }
});

var SearchResult = React.createClass({
  render: function() {
    return (
      <div className="panel large-12 columns">
        <h5>{this.props.location.name}</h5>
        <p>{this.props.location.description}</p>
        <a href="#" className="like button tiny right">Like</a>
      </div>
    );
  }
});

var SearchResultList = React.createClass({
  render: function() {
    var list = [];
    this.props.results.forEach(function(result) {
      list.push(<SearchResult location={result} />)
    });
    return (
      <div className="large-8 medium-8 columns" id="searchResults">
        <HeadLine title={this.props.title} />
        {list}
      </div>
    );
  }
});

var SearchForm = React.createClass({
  render: function() {
    return (
      <div className="row" id="searchForm">
        <div className="large-9 medium-9 columns">
          <input type="text" value="" placeholder="Type a location to search"/>
        </div>
        <div className="large-3 medium-3 columns">
            <input type="button" className="submit button tiny" value="search" />
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
        <SearchResultList results={results} title="Search Results" />
        <LikedLocationList title="Liked Locations"/>
      </div>
    );
  }
});

var SearchLocationApp = React.createClass({
  render: function() {
    return (
      <div>
        <SearchForm />
        <Divider />
        <ResultPanel />
      </div>
    )
  }
});

var results = [
    {
        "name": "Melbourne 3121",
        "description": "Melbourne is the capital and most populous city in the state of Victoria, and the second most populous city in Australia."
    },
    {
        "name": "Melbourne Cricket Ground",
        "description": "The Melbourne Cricket Ground (MCG) is an Australian sports stadium located in Yarra Park, Melbourne, Victoria, and is home to the Melbourne Cricket Club."
    },
    {
        "name": "East Melbourne",
        "description": "The great place, very nice place to go"
    }
];

React.render(<SearchLocationApp />, document.getElementById('container'));
