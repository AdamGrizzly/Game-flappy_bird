var express = require('express');

var app = express();

app.get('/', function(req, res) {
  app.use(express.static("www"));
});

app.listen(8000);
console.log('Сервер стартовал!');
