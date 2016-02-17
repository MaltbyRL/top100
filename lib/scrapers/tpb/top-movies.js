'use strict';

var cheerio = require('cheerio');
var request = require('request');

const TPB_URL = "https://thepiratebay.se/top/207"


function topMovies(callback) {
  request(TPB_URL, (err, resp, body) => {
    var movies = [];

    if (err) {
      return callback(err);
    }

    if (resp.statusCode === 200) {
      var $ = cheerio.load(body);

      $('#content .detName a').each(function(index, element) {
        movies.push($(this).text())
      });
    }

    callback(null, movies);

  });
}

module.exports = topMovies
