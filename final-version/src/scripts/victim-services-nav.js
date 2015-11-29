var React = require('react');
var ReactDOM = require('react-dom');

var VictimServicesNav = React.createClass({

  getInitialState: function() {
    return {
      section: null
    }
  },

  render: function () {
    return (
      <nav className="victim-services-nav">
        <a>Profile</a>
        <a>Live Chat</a>
        <a>Safety assessment</a>
        <a>Emergency</a>
      </nav>
    )
  }

});

module.exports = VictimServicesNav;