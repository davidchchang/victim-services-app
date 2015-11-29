var React = require('react');
var ReactDOM = require('react-dom');

var VictimServicesProfile = React.createClass({

  getInitialState: function() {
    return {
      section: null
    }
  },

  render: function () {
    return (
      <div className="victim-services-profile">
        <h1>Profile</h1>
      </div>
    )
  }

});

module.exports = VictimServicesProfile;