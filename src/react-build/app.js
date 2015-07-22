var HeadLine = React.createClass({displayName: "HeadLine",
  render: function() {
    return (React.createElement("h4", null, this.props.title));
  }
});

var LikedLocation = React.createClass({displayName: "LikedLocation",
  render: function() {
    return (React.createElement("li", {className: "like"}, this.props.location));
  }
});

var LikedLocationList = React.createClass({displayName: "LikedLocationList",
  render: function() {
    var list = [];
    this.props.data.forEach(function(item) {
      list.push(React.createElement(LikedLocation, {location: item, key: item.name}))
    });
    return (
      React.createElement("div", {className: "large-4 medium-4 columns likedPlaces"}, 
        React.createElement(HeadLine, {title: this.props.title}), 
        React.createElement("ul", null, list)
      )
    );
  }
});

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

var SearchResultList = React.createClass({displayName: "SearchResultList",
  render: function() {
    var list = [];
    var handleLike = this.props.handleLike;
    this.props.data.forEach(function(item) {
      list.push(React.createElement(SearchResult, {location: item, key: item.name, handleLike: handleLike}))
    });
    return (
      React.createElement("div", {className: "large-8 medium-8 columns searchResults"}, 
        React.createElement(HeadLine, {title: this.props.title}), 
        list
      )
    );
  }
});

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

var Divider = React.createClass({displayName: "Divider",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("hr", {className: "large-12 columns"})
      )
    );
  }
});

var ResultPanel = React.createClass({displayName: "ResultPanel",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement(SearchResultList, {data: this.props.results, title: "Search Results", handleLike: this.props.handleLike}), 
        React.createElement(LikedLocationList, {data: this.props.liked, title: "Liked Locations"})
      )
    );
  }
});

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

React.render(React.createElement(SearchLocationApp, null), document.getElementById('container'));
