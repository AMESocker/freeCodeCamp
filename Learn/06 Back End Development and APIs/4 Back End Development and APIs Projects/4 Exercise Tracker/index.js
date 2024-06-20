const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

let users = [];

app.post('/api/users', (req, res) => {
  const newUser = req.body.username;
  const id = users.length;
  if (!users.find(user => user.username === newUser)){
    // res.json({ error: 'Username already taken' });
    users.push({
      _id : id,
      username: newUser
    });
    
    res.json({ 
      _id : id,
      username: newUser
    });
  }
    
})

app.get('/api/users', (req, res) => {
  res.json(users);
})

let exercises = [];

app.post('/api/users/:_id/exercises', (req, res) => {
  const userId = req.params._id;
  const user = users.find(user => user._id == userId);
  if (!user) {
    res.json({ error: 'User not found' });
  }
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;
  const newExercise = {
    // _id: userId,
    // username: user.username,
    description: description,
    duration: duration,
    date: date
  }
  exercises.push(newExercise);
  res.json({newExercise});
})
app.get('/api/users/:_id/logs', (req, res) => {
  res.json(exercises);
})



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
