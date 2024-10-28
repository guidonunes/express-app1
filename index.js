var express = require('express');
var multer  = require('multer');



var app = express();

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({ storage: storage }).single('file');

app.post('/', function(req, res) {

  upload(req, res, function(err) {
    if(err) {
      return res.send('Error uploading file.');
    }
    res.send('File is uploaded');
  });
})



app.listen(8000, function() {
  console.log('Listening on port 8000');
});
