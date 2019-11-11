var createError = require('http-errors');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const models = require('./models/index.js');
var indexRouter = require('./router/index');

models.sequelize
  .sync()
  .then(() => {
    console.log(' DB 연결 성공');
  })
  .catch(err => {
    console.log('연결 실패');
    console.log(err);
  });

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/', indexRouter);

module.exports = app;
