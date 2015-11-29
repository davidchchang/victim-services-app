var React = require('react');
var ReactDOM = require('react-dom');

var VictimServicesSafety = React.createClass({

  getInitialState: function() {
    return {
      section: null
    }
  },

  render: function () {
    return (
      <div className="victim-services-safety">
        <h1>Safety Tips</h1>
      </div>
    )
  }

});

module.exports = VictimServicesSafety;