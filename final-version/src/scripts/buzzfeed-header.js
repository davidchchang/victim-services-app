var React = require('react');
var ReactDOM = require('react-dom');

var BuzzFeedHeader = React.createClass({

  render: function () {
    return (
      <header>
        <div class="page-header__content">
          <h1 class="page-header__logo">
            <a href="/">
              <img src="images/BuzzFeed.jpg" />
            </a>
            <span class="page-header__tagline">
              <a href="/">News</a>
              <a href="/">Buzz</a>
              <a href="/">Life</a>
            </span>
            <ul class="badge-list">
              <li class="badge-list__item badge-list__item--lol">
                <a class="badge__link" href="/lol?country=en-ca" title="lol">
                  <img src="images/lol_big.png" />
                </a>
              </li>
              <li class="badge-list__item badge-list__item--win ">

                <a class="badge__link" href="/win?country=en-ca" title="win">
                  <img src="images/win_big.png" />
                </a>

              </li>


              <li class="badge-list__item badge-list__item--omg ">

                <a class="badge__link" href="/omg?country=en-ca" title="omg">
                  <img src="images/omg_big.png" />
                </a>

              </li>


              <li class="badge-list__item badge-list__item--cute ">

                <a class="badge__link" href="/cute?country=en-ca" title="cute">
                  <img src="images/cute_big.png" />
                </a>

              </li>

              <li class="badge-list__item badge-list__item--wtf ">

                <a class="badge__link" href="/wtf?country=en-ca" title="wtf">
                  <img src="images/wtf_big.png" />
                </a>

              </li>


              <li class="badge-list__item badge-list__item--trending ">

                <a class="badge__link" href="/trending?country=en-ca" title="trending">
                  <img src="images/trending_big.png" />
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