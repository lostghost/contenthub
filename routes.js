
routes = function(app) {
  app.get('/classes', function (req, res) {
    res.send('Hello World');
  });
};

module.exports = routes;