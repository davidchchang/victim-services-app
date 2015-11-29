var React = require('react');
var ReactDOM = require('react-dom');

var DataProvider = require('./data-provider');
var dataProvider = new DataProvider();

var BuzzFeedHeader = require('./buzzfeed-header');
var BuzzFeedContent = require('./buzzfeed-content');
var VictimServices = require('./victim-services');
var VictimServicesLogin = require('./victim-services-login');
var VictimServicesEmergency = require('./victim-services-emergency');

var VictimServicesApp = React.createClass({

  getInitialState: function() {
    return {
      applicationState: null,
      loginError: null
    };
  },

  componentDidMount: function() {

    // this.getData('toronto');

  },

  triggerEmergency: function(e) {
    e.preventDefault();
    this.setState({
      applicationState: "emergency"
    });
  },

  triggerLogin: function(e) {
    e.preventDefault();
    this.setState({
      applicationState: "login"
    });
  },

  login: function(username, password) {
    if (username == "anna" && password == "123") {
      this.setState({
        applicationState: "loggedIn"
      });
    } else {
      this.setState({
        loginError: "Sorry, that was not a valid login"
      });
    }
  },

  render: function() {

    //var forecast = this.state.forecastData.map((data, i) => {
    //  return <ForecastDay key={i} temp={data.temp} weather={data.weather} date={data.date} />
    //});

    var mainBody;
    if (this.state.applicationState == null) {
      mainBody = <BuzzFeedContent></BuzzFeedContent>;
    } else if (this.state.applicationState == "emergency") {
      mainBody = <VictimServicesEmergency></VictimServicesEmergency>;
    } else if (this.state.applicationState == "login") {
      mainBody = <VictimServicesLogin onSubmit={this.login} loginError={this.state.loginError}></VictimServicesLogin>;
    } else if (this.state.applicationState == "loggedIn") {
      mainBody = <VictimServices></VictimServices>;
    }

    return (
      <div className="app-container">
        <BuzzFeedHeader emergencyFn={this.triggerEmergency} loginFn={this.triggerLogin}></BuzzFeedHeader>
        <div className="clear"></div>
        <img className="buzzfeed-header" src="images/FakeHeader.png"></img>
        {mainBody}
      </div>
    )
  }

});

ReactDOM.render(<VictimServicesApp />, document.getElementById('main'));
