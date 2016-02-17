'use strict';

var express = require('express');

var topMovies = require('../../../lib/scrapers/tpb/top-movies')

var router = express.Router();



// GET /api/top-movies
router.get('/top-movies', (req, res, next) => {
  topMovies((movies => {
    if (err) {
      return next(err);
    }

    res.json({ movies: movies })
  });
});

//POST /api/top-movies
router.post('/', (req, res, next) => {
  res.json({ hello: 'world'});
});

module.exports = router;
