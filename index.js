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


app.get('/six', function(req, res) {
  res.append('name', 'Gui N');
  res.append('city', 'Rio');

  res.status(201).end("Response Header Ended");
})

app.get('/seven', function(req, res) {
  res.cookie('name', 'Gui N');
  res.cookie('city', 'Rio');
  res.cookie('age', '33');

  res.end("Cookies Set");
})

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
