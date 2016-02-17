'use strict';

var express = require('express');
var topMovies = require('./lib/scrapers/tpb/top-movies');
var request = require('request');

var app = express();


app.get('/', (req, res) => {
  console.log("hello world")
})

app.listen(process.env.PORT || 3000)






/*
torrents normally use http
To encrypt all traffic you can confuse the isp
use privateinternetaccess.com
look up pineapple program.
tor is almost a free vpn
torproject.org
*/
