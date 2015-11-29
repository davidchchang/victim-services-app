var React = require('react');
var ReactDOM = require('react-dom');

var VictimServicesEmergency = React.createClass({

  getInitialState: function() {
    return {
      recording: true
    }
  },

  stopRecording: function() {
    this.setState({
      recording: false
    })
  },

  render: function() {
    return (
      <div className="victim-services-emergency">
      An incident report has been filed. For your convenience, audio recording has been enabled.
      {this.state.recording ?
        <button className="button button-submit" onClick={this.stopRecording}>Stop recording</button>
        :
        <div className="recording-complete">Recording uploaded.</div>
        }
      </div>
    )
  }

});

module.exports = VictimServicesEmergency;