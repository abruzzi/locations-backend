var React = require('react/addons');

var HeadLine = React.createClass({displayName: "HeadLine",
  render: function() {
    return (React.createElement("h4", null, this.props.title));
  }
});

module.exports = HeadLine;