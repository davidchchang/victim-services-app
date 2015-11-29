var React = require('react');
var ReactDOM = require('react-dom');

var BuzzFeedHeader = React.createClass({

  render: function () {
    return (
      <header>
        <div className="page-header__content">
          <h1 className="page-header__logo">
            <a href="/">
              <img className="logo" src="images/BuzzFeed.jpg" />
            </a>
            <span className="page-header__tagline">
              <a href="/">News</a>
              <a href="/">Buzz</a>
              <a href="/">Life</a>
            </span>
            <ul className="badge-list">
              <li className="badge-list__item badge-list__item--lol">
                <a className="badge__link" href="/?country=en-ca" title="lol">
                  <img src="images/lol_big.png" />
                </a>
              </li>
              <li className="badge-list__item badge-list__item--win ">
                <a className="badge__link" href="/?country=en-ca" title="win">
                  <img src="images/win_big.png" />
                </a>
              </li>
              <li className="badge-list__item badge-list__item--omg ">
                <a className="badge__link" href="/?country=en-ca" title="omg">
                  <img src="images/omg_big.png" />
                </a>
              </li>
              <li className="badge-list__item badge-list__item--cute ">
                <a className="badge__link" href="/?country=en-ca" title="cute">
                  <img src="images/cute_big.png" />
                </a>
              </li>
              <li className="badge-list__item badge-list__item--wtf ">
                <a className="badge__link" href="/?country=en-ca" title="wtf">
                  <img src="images/wtf_big.png" />
                </a>
              </li>
              <li className="badge-list__item badge-list__item--trending ">
                <a className="badge__link" href="/?country=en-ca" title="trending">
                  <img src="images/trending_big.jpg" />
                </a>
              </li>
            </ul>
          </h1>
        </div>
      </header>
    )
  }

});

module.exports = BuzzFeedHeader;