const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

//----Middleware----
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  // console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  console.log(req.method + ' ' + req.path);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
  });

//----Date Format----
let dateEntry;
let month =
  new Date().getMonth() + 1 < 10
    ? "0" + (new Date().getMonth() + 1)
    : new Date().getMonth() + 1;
dateEntry =
  new Date().getFullYear() + "-" + month + "-" + new Date().getDate();

//----Mongoose Schema----
const userSchema = new Schema({
  username: { type: String, required: true },
  count: { type: Number, default: 0 },
  log: [
    {
      description: { type: String, required: true },
      duration: { type: Number, required: true },
      date: { type: Date, default: dateEntry }
    }
  ]
});

let User = mongoose.model('User', userSchema);


//----Routes----
app.post("/api/users", (req, res) => {
  const newUser = req.body.username;
  const user = new User({ username: newUser });

  User.findOne({ username: newUser }, function (err, isUser) {
    if (err) return console.error(err);
    if (isUser) {
      res.json({
        _id: isUser._id,
        username: isUser.username,
      });
    } else {
      user.save((err, data) => {
        if (err) return console.error(err);
        res.json({
          _id: data._id,
          username: data.username
        });
      });
    }
  });
});

app.get('/api/users', (req, res) => {
  User.find({}, (err, data) => {
    if (err) return console.error(err);
    res.json(data);
  });
});

app.post("/api/users/:_id/exercises", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params._id },
    { $push: { log: req.body } },
    { new: true },
    (err, data) => {
      if (err) return console.error(err);
      if (data) {
        month =
          new Date(req.body.date).getMonth() + 1 < 10
            ? "0" + (new Date(req.body.date).getMonth() + 1)
            : new Date(req.body.date).getMonth() + 1;
        dateEntry =
          new Date(req.body.date).getFullYear() +
          "-" +
          month +
          "-" +
          new Date(req.body.date).getDate();

      res.json({
        username: data.username,
        _id: data._id,
        date: dateEntry,
        duration: parseInt(req.body.duration),
        description: req.body.description,
      });
    }
    }
  );
});

app.get('/api/users/:_id/logs', (req, res) => {
  let _id = req.params._id;
  User.findById(_id, (err, data) => {
    if (err) return console.error(err);

    let from = new Date(req.query.from);
    let to = new Date(req.query.to);
    let limit = parseInt(req.query.limit);

    if (!isNaN(from.valueOf())) {
      data.log = data.log.filter((session) => new Date(session.date) >= from);
    }
    if (!isNaN(to.valueOf())) {
      data.log = data.log.filter((session) => new Date(session.date) <= to);
    }
    if (!isNaN(limit)) {
      data.log = data.log.slice(0, limit);
    }

    console.log(data.log[0].date.toDateString());
    res.json({
      _id: data._id,
      username: data.username,
      count: data.log.length,
      log: data.log.map((session) => ({
        description: session.description,
        duration: session.duration,
        date: session.date.toDateString(),
      })),
    });

  })
});



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
