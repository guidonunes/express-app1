var express = require('express');

var app = express();



app.get('/usa', function(req, res) {
  res.redirect('http://localhost:8000/india');
})

app.get('/india', function(req, res) {
  res.send('This is India');
})

app.post('/two', function(req, res) {
  res.send('About Page');
})

app.delete('/contact', function(req, res) {
  res.send('Contact Page');
})

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
