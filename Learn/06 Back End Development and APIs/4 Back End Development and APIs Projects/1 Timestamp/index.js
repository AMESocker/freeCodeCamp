// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api', function(req, res, next) {
  req.time = new Date();
  next();
}, function(req, res) {
  res.json({
    unix: req.time.getTime(),
    utc: req.time.toUTCString()
  });
});


app.get("/api/:date?", function (req, res) {
  let date = req.params.date;
  let dateObject = new Date(date);
  let response
  console.log(date,date.length,response);

  if (date.length === 10) {
    response = {
      unix: dateObject.getTime(),
      utc: dateObject.toUTCString()
    };
  } else if (date.length === 13) {
    let unixDate = Number(date )
    response = {
      unix: unixDate,
      utc: new Date(unixDate).toUTCString()
    }
 }else if (dateObject.toString() === "Invalid Date") {
    response = {
      error: "Invalid Date"
    };
  } else {
    response = {
      unix: dateObject.getTime(),
      utc: dateObject.toUTCString()
    }
  }
  console.log(response);
  res.json(response);
});




  



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
