
var express = require('express');
var app = express();

// Config
require('./config')(app)

// Routes
require('./routes')(app)

module.exports = app