
/**
 * Module dependencies
 */

var express = require('express');

var app = express();

// all environements
app.set('port', process.env.PORT || 3000);
app.use(app.router);

app.get('/classes', function (req, res) {
	res.send('Hello World');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
