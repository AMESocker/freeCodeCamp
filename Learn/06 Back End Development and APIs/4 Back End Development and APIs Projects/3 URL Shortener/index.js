require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const dns = require('dns');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

let shortUrls = [];
const hexNumbers = '0123456789abcdef'
const randomHexNumber = () => {
  let hexNumber = []
  for (let i = 0; i < 8; i++) {
    let random = hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
    hexNumber.push(random)
  }
  hexNumber = hexNumber.join('')
  return hexNumber.toString()
}

app.post('/api/shorturl/', function (req, res) {
  // console.log('app.post - /api/shorturl/')

  const url = req.body.url;
  const urlObj = new URL(url);
  console.log(urlObj)

  dns.lookup(urlObj.hostname, (err) => {
    if (err) {
      res.json({ error: 'invalid url' });
    } else if (!urlObj.protocol.includes('http')) {
      res.json({ error: 'invalid url' });
    } else {
      if (!shortUrls.find(urlData => urlData.original_url === url)) {
        shortUrls.push({
          original_url: urlObj,
          short_url: randomHexNumber(),
        });
      }

      res.json({
        original_url: url,
        "short_url": shortUrls[shortUrls.length - 1].short_url,
      });
    }
  });



})

app.get('/api/shorturl/:short_url', function (req, res) {
  console.log('app.get')
  const short_url = req.params.short_url;
  const url = shortUrls.find(url => url.short_url === short_url);
  if (url) {
    res.redirect(url.original_url.href)
  } else {
    res.json({ error: 'No short URL found for the given input' });
  }
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
