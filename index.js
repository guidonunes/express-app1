var express = require('express');

app = express();

app.get('/three', function(req, res) {
  res.status(201).end();
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
