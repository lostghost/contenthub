
/**
 * Application instantiation and configuration
 */

var express = require('express');
var app = express();

// Load application configuration
require('./config')(app);

// Load application routes
require('./routes')(app);

module.exports = app;