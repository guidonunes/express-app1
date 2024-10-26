var express = require('express');

app = express();

app.get('/three', function(req, res) {
  res.status(201).end();
})

app.get('/four', function(req, res) {
  let MyJSONArray = [
    {
      name: "John",
      age: 30,
      city: "New York"
    },
    {
      name: "Smith",
      age: 50,
      city: "Chicago"
    }
  ];

  res.json(MyJSONArray);
})

app.get('/five', function(req, res) {
  res.download(201);
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
