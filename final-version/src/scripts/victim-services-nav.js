var React = require('react');
var ReactDOM = require('react-dom');

var VictimServicesNav = React.createClass({

  getInitialState: function() {
    return {
      section: null
    }
  },

  profileClicked: function() {
    this.setState({
      section: 'profile'
    });
    this.props.profileClickFn();
  },
  chatClicked: function() {
    this.setState({
      section: 'chat'
    });
    this.props.chatClickFn();
  },
  safetyClicked: function() {
    this.setState({
      section: 'safety'
    });
    this.props.safetyClickFn();
  },
  emergencyClicked: function() {
    this.setState({
      section: 'emergency'
    });
    this.props.emergencyClickFn();
  },


  render: function () {
    return (
      <nav className="victim-services-nav">
        <a className={this.state.section == 'profile' ? 'active': null} onClick={this.profileClicked}>Profile</a>
        <a className={this.state.section == 'chat' ? 'active': null} onClick={this.chatClicked}>Live Chat</a>
        <a className={this.state.section == 'safety' ? 'active': null} onClick={this.safetyClicked}>Safety assessment</a>
        <a className={this.state.section == 'emergency' ? 'active': null} onClick={this.emergencyClicked}>Emergency</a>
      </nav>
    )
  }

});

module.exports = VictimServicesNav;