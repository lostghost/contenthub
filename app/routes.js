
/**
 * Application routes
 */

module.exports = function(app){
  // Controllers
  var classes = require('./controllers/classcontroller')(app)
    , status  = require('./controllers/statuscontroller')(app);

  // Classes resources
  app.get('/classes', classes.index);
  app.post('/classes', classes.create);
  app.get('/classes/:class', classes.show);

  // Status resources
  app.get('/status', status.show);
};