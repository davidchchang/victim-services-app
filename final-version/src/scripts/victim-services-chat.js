var React = require('react');
var ReactDOM = require('react-dom');

var VictimServicesChat = React.createClass({

  getInitialState: function() {
    return {
      section: null
    }
  },

  render: function () {
    return (
      <div className="victim-services-chat">
        <h1>Chat</h1>
      </div>
    )
  }

});

module.exports = VictimServicesChat;