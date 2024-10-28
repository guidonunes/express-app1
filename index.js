var express = require('express');

var app = express();



app.get('/', function(req, res) {
  res.send('Hello from Express');
});

app.use('/about', function(req, res, next) {
  console.log('I am a middleware');
  next();
});


app.get('/about', function(req, res) {
  res.send('Hello from About');
});


app.get('/contact', function(req, res) {
  res.send('Hello from Contact');
});

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
