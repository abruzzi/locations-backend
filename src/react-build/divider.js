var React = require('react/addons');

var Divider = React.createClass({displayName: "Divider",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("hr", {className: "large-12 columns"})
      )
    );
  }
});

module.exports = Divider;