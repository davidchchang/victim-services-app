var React = require('react');
var ReactDOM = require('react-dom');

var VictimServicesNav = require('./victim-services-nav');
var VictimServicesChat = require('./victim-services-chat');
var VictimServicesProfile = require('./victim-services-profile');
var VictimServicesSafety = require('./victim-services-safety');

var VictimServices = React.createClass({

  getInitialState: function() {
    return {
      section: null
    };
  },

  emergencyClicked: function () {
    this.props.emergencyFn();
  },

  safetyClicked: function () {
    this.setState({
      section: 'safety'
    });
  },

  chatClicked: function () {
    this.setState({
      section: 'chat'
    });
  },

  profileClicked: function () {
    this.setState({
      section: 'profile'
    });
  },

  render: function () {
    var mainContent;

    if (this.state.section == 'chat') {
      mainContent = <VictimServicesChat></VictimServicesChat>
    } else if (this.state.section == 'profile') {
      mainContent = <VictimServicesProfile></VictimServicesProfile>
    } else if (this.state.section == 'safety') {
      mainContent = <VictimServicesSafety></VictimServicesSafety>
    }

    return (
      <div className="victim-services">
        <VictimServicesNav emergencyClickFn={this.emergencyClicked} safetyClickFn={this.safetyClicked} profileClickFn={this.profileClicked} chatClickFn={this.chatClicked}></VictimServicesNav>
        <div className="victim-services-container">
      {mainContent}
        </div>
      </div>
    )
  }

});

module.exports = VictimServices;