var $ = require('jquery');

var DataProvider = function(){};

/**
 * Function that makes an ajax call and returns data from the weather API
 *
 * @prop {String}     [city] - the city you're searching for
 * @prop {Function}   [callback] - a callback function that will fire after the data has been collected
 *
 */
DataProvider.prototype.getWeather = function(city, callback) {
  var self = this;
  var data = {
    APPID: '7699bac00fc6df4c0ff4b215ca742fd0',
    q: city,
    cnt: 7,
    units: 'metric'
  };

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily',
    type: 'GET',
    dataType: 'jsonp',
    data: {
      APPID: '7699bac00fc6df4c0ff4b215ca742fd0',
      q: city,
      cnt: 5,
      units: 'metric'
    },
    success: function(response) {
      callback(false, self.parseResponse(response));
    },
    error: function(response) {
      callback(true, response);
    }
  });

};

// parse the response into a less complicated object
DataProvider.prototype.parseResponse = function(response) {
  var city = response.city.name;
  var days = response.list.map((day) => {

    return {
      date: this.parseUnix(day.dt),
      temp: Math.round(day.temp.max),
      weather: day.weather[0].main,
      icon: day.weather[0].icon
    };

  });

  return {
    city: city,
    forecast: days
  }
};


// parses the unix time and transform it into an object with the date and month
DataProvider.prototype.parseUnix = function(unixTime) {
  
  var date = new Date(unixTime * 1000);
  return DataProvider.MONTH_NAMES[date.getMonth()].substring(0,3) + ' ' + date.getDate();


};

// An array of month names to turn the Javascript month (zero-indexed) into the real date
DataProvider.MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

module.exports = DataProvider;
