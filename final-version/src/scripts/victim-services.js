var React = require('react');
var ReactDOM = require('react-dom');

var VictimServicesNav = require('./victim-services-nav');

var VictimServices = React.createClass({

  render: function () {
    var mainContent;

    return (
      <div className="victim-services">
        <VictimServicesChat></VictimServicesChat>
        <div className="victim-services-container">
      {mainContent}
        </div>
      </div>
    )
  }

});

module.exports = VictimServices;