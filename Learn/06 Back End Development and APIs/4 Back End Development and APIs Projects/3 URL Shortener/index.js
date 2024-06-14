require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
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
  return hexNumber
}

app.post('/api/shorturl/', function(req, res) {
  const url = req.body.url;
  console.log(url)

  const urlRegex = /^(http|https):\/\/[^ "]+$/;
  // if (!urlRegex.test(url)) {
  //   res.json({ error: 'invalid URL' },{url: url});
  //   return;
  // }
console.log(shortUrls.find(url => url.original_url === url.original_url))

  if (!shortUrls.find(urlData => urlData.original_url === url)) {
    shortUrls.push({
      original_url: url,
      short_url: randomHexNumber(),
    });
  }

  res.json({ 
    original_url: url, 
    "short_url":"/api/shorturl/" + shortUrls[shortUrls.length - 1].short_url,
  });
  console.log(shortUrls)
})

app.get('/api/shorturl/:short_url', function(req, res) {
  const short_url = req.params.short_url;
  const url = shortUrls.find(url => url.short_url === short_url);
  console.log(url,res.redirect)
  if (url) {
    res.redirect(url.original_url)
  } else {
    res.json({ error: 'No short URL found for the given input' });
  }
});



app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
