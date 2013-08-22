
/**
 * Application configuration
 */

module.exports = function(app){
  var express  = require('express')
    , notfound = require('./middleware/notfound');

  // App configuration
  app.set('port', process.env.PORT || 3000);

  // development only
  app.configure('development', function(){
    app.set('mongodb_server', 'mongodb://localhost/contenthub');
  });

  // Middleware
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.errorHandler());
  app.use(notfound);
};