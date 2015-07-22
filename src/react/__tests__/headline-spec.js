jest.dontMock('../components/headline.jsx');

describe('Headline', function() {
  var React = require('react/addons');
  var Headline = require('../components/headline.jsx');
  var TestUtils = React.addons.TestUtils;

  it('#render', function() {
    var text = "this is a title";
    var headline = TestUtils.renderIntoDocument(<Headline title={text} />);
    var title = TestUtils.findRenderedDOMComponentWithTag(headline, 'h4');
    expect(headline.getDOMNode()).toBeDefined();
    expect(headline.getDOMNode().textContent).toEqual(text);
  });
});
