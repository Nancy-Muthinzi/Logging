// import fs library
var fs = require('fs');

// make logger object available
var Logger = exports.Logger = {};

// create streams for logging
var infoStream = fs.createWriteStream('logs/info.txt');
var errorStream = fs.createWriteStream('logs/error.txt');
var debugStream = fs.createWriteStream('logs/debug.txt');
