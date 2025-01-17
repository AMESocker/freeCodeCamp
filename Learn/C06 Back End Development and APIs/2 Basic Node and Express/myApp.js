require('dotenv').config()
let express = require('express');
let app = express();
console.log("Hello World");
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
//? 3 Serve an HTML File
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
//? 7 Implement a Root-Level Request Logger Middleware
app.use(function(req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});
//? 4 Serve Static Assets
app.use('/public', express.static(__dirname + '/public'));
//? 5 Serve JSON on a Specific Route
//? 6 Use the .env File
app.get('/json', function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({"message": message});
});
//? 8 Chain Middleware to Create a Time Server
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({time: req.time});
});

app.get('/:word/echo', function(req, res) {
  res.json({echo: req.params.word});
});

app.route('/name').get(function(req, res) {
  res.json({name: req.query.first + ' ' + req.query.last});
});

app.route('/name').post(function(req, res) {
  res.json({name: req.body.first + ' ' + req.body.last});
});





























 module.exports = app;
