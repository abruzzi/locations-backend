jest.dontMock('../components/divider.jsx');
console.log('---------------------');
describe('Divider', function() {
  it('#render', function() {
    var React = require('react/addons');
    var Divider = require('../components/divider.jsx');
    var TestUtils = React.addons.TestUtils;

    var divider = TestUtils.renderIntoDocument(<Divider />);
    var hr = TestUtils.findRenderedDOMComponentWithTag(divider, 'hr');
    expect(hr.getDOMNode()).toBeDefined();
  });
});
