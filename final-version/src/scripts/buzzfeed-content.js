var React = require('react');
var ReactDOM = require('react-dom');

var BuzzFeedContent = React.createClass({

  render: function () {
    return (
      <div>
        <img className="buzzfeed-content" src="images/FakeContent.png"></img>
      </div>
    )
  }

});

module.exports = BuzzFeedContent;