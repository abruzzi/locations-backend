jest.dontMock('../components/divider.jsx');

describe('Divider', function() {
  var React = require('react/addons');
  var Divider = require('../components/divider.jsx');
  var TestUtils = React.addons.TestUtils;

  it('#render', function() {
    var divider = TestUtils.renderIntoDocument(<Divider />);
    var hr = TestUtils.findRenderedDOMComponentWithTag(divider, 'hr');
    expect(hr.getDOMNode()).toBeDefined();
  });
});
