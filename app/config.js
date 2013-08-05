
/**
 * Application configuration
 */

module.exports = function(app){
  var express  = require('express')
    , notfound = require('./middleware/notfound');

  // Global configuration
  app.set('port', process.env.PORT || 3000);
  app.use(app.router);
  app.use(express.errorHandler());
  app.use(notfound);
};