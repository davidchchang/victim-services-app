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
        <ol>
          <li>Name</li>
          <li>Age</li>
          <li>Gender</li>
          <li>Address</li>
          <li>Type of situation (verbal, physical, sexual)</li>
          <li>Relationship (family/spouse/not related)</li>
          <li>Living situation</li>
          <li>Length of incident</li>
          <li>Anything else</li>
        </ol>
      </div>
    )
  }

});

module.exports = VictimServicesProfile;