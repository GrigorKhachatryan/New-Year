var express = require('express');
const bodyParser = require("body-parser");
require('dotenv').load();

var app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use('/static', express.static('static'));

app.set('view engine', 'ejs');

app.get('/',function (req, res) {

    res.render('index');

});

app.listen(process.env.PORT);
console.log('Сервер запущен');