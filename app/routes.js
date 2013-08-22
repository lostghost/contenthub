
/**
 * Application routes
 */

module.exports = function(app){
  // Controllers
  var types = require('./controllers/typecontroller')(app)
    , status  = require('./controllers/statuscontroller')(app);

  // Classes resources
  app.get('/types', types.index);
  app.post('/types', types.create);
  app.get('/types/:class', types.show);

  // Status resources
  app.get('/status', status.show);
};