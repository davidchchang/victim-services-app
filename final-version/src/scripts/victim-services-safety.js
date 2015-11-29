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
        <ul>
          <li>Does the abuser change just before becoming violent</li>
          <li>• Look in eyes change</li>
          <li>• Posture changes (fists clenched, etc.)</li>
          <li>• Voice changes</li>
          <li>• Face changes (expression/colour)</li>
          <li>• Threatens verbally or non-verbally before striking you</li>
          </ul>
      </div>
    )
  }

});

module.exports = VictimServicesSafety;