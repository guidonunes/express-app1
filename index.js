var express = require('express');

var app = express();


app.post('/', function(req, res) {

  let userName = req.header('userName');
  let password = req.header('password');

  res.send('User Name:' + userName + ' Password:' + password);
})



app.listen(8000, function() {
  console.log('Listening on port 8000');
});
