// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
  app.use(express.static("www"));
});

// запускаем сервер на порту 8000
app.listen(8000);
// отправляем сообщение
console.log('Сервер стартовал!');