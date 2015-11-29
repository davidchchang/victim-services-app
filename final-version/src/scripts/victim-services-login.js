var React = require('react');
var ReactDOM = require('react-dom');

var VictimServicesLogin = React.createClass({

  getInitialState: function() {
    return {
      username: null,
      password: null
    }
  },

  onUsernameChange: function(e) {
    this.setState({
      username: e.target.value
    });
  },

  onPasswordChange: function(e) {
    this.setState({
      password: e.target.value
    });
  },

  login: function(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  },

  render: function() {
    return (
      <div className="victim-services victim-services-login">
        <form className="input-form" onSubmit={this.getForecast}>
          {this.props.loginError != null ?
            <div className="login-error">
          {this.props.loginError}
            </div>
              :
            null
            }
          <div className="login-inputs">
          <input type="text" className="city-input" placeholder="Enter your username" onChange={this.onUsernameChange} />
          <input type="password" className="city-input" placeholder="Enter your password" onChange={this.onPasswordChange} />
          <button className="button button-submit" onClick={this.login}>Login</button>
            </div>
        </form>
      </div>
    )
  }

});

module.exports = VictimServicesLogin;