var React = require('react/addons');

var HeadLine = React.createClass({
  render: function() {
    return (<h4>{this.props.title}</h4>);
  }
});

module.exports = HeadLine;