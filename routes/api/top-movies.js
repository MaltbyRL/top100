'use strict';

var exprexx = require('express');
var router = express.Router();

router.get('/top-movies', (req, res, next) => {
  res.json({hello: "world!"});
});

module.exports = router;
