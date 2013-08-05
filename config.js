
var express = require('express');

config = function(app) {
  // Configuration
  app.set('port', process.env.PORT || 3000);
  app.use(app.router);
  app.use(express.errorHandler());
};

module.exports = config;