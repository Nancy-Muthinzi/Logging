var express = require('express');
var router = new express.Router();

router.use(function timeLog(req, res, next) {
  next();
});

router.get('/', function( req, res) {
  res.send('Home Page');
});

module.exports = router;
