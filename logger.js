// import fs library
var fs = require('fs');

// make logger object available
var Logger = exports.Logger = {};

// create streams for logging
var infoStream = fs.createWriteStream('logs/info.txt', {flags:'a'});
var errorStream = fs.createWriteStream('logs/error.txt');
var debugStream = fs.createWriteStream('logs/debug.txt');

// create functions
// logger function
Logger.info = function(msg) {
  var message = new Date().toISOString() + " : " + msg + "\n";
  infoStream.write(message);
};

// debug function
Logger.debug = function(msg) {
  var message = new Date().toISOString() + " : " + msg + "\n";
  debugStream.write(message);
};

// error function
Logger.error = function(msg) {
  var message = new Date().toISOString() + " : " + msg + "\n";
  errorStream.write(message);
};
