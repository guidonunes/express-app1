var express = require('express');

app = express();

app.get('/', function(req, res) {
  res.send('Home Page');
})

app.post('/about', function(req, res) {
  res.send('About Page');
})

app.delete('/contact', function(req, res) {
  res.send('Contact Page');
})

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
