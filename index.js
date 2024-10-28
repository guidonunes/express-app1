var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.post('/', function(req, res) {
  let data = req.body;
  let JSONString = JSON.stringify(data);
  res.send(JSONString);
})



app.listen(8000, function() {
  console.log('Listening on port 8000');
});
