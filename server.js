'use strict';

var express = require('express');
var stormpath = require('express-stormpath')

var api = require('./routes/api');

var app = express();

app.use(stormpath.init(app, { website: true}));

app.use('/api', api);


app.on('stormpath.ready', () => {
  app.listen(process.env.PORT || 3000)
})






/*
torrents normally use http
To encrypt all traffic you can confuse the isp
use privateinternetaccess.com
look up pineapple program.
tor is almost a free vpn
torproject.org
*/

/*
  1. Node core require's
  br
  2. Third part libraries (express storm path, requests ...)
  br
  3. Your local modules. (lib / routes / api / ...)
  s*/
