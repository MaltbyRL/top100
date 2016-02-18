'use strict';

var express = require('express');
var stormpath = require('express-stormpath')

var api = require('./routes/api');

var app = express();

app.use(stormpath.init(app, {
  website: true,
  expand: {
    customData: true
  }
}));

app.use('/api', stormpath.apiAuthenticationRequired, api);


app.on('stormpath.ready', () => {
  app.listen(process.env.PORT || 3000)
})
