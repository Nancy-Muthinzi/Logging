var express = require('express');
var router = new express.Router();

// import logger file
// instantiate logger oject
var logger = require('./logger').Logger;

router.use(function timeLog(req, res, next) {
  logger.info("Trial Run");
  next();
});

router.get('/', function( req, res) {
  res.send('Home Trial Page');
});

module.exports = router;
