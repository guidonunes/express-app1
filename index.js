var express = require('express');

app = express();

app.get('/', function(req, res) {
  res.send('Hello From Express');
})

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
