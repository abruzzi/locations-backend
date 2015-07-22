var React = require('react/addons');

var Divider = React.createClass({
  render: function() {
    return (
      <div className="row">
        <hr className="large-12 columns" />
      </div>
    );
  }
});

module.exports = Divider;