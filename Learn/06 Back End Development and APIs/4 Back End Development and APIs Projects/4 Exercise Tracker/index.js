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
    console.log(users);
})

app.get('/api/users', (req, res) => {
  res.json(users);
})

let log = [];

app.post('/api/users/:_id/exercises', (req, res) => {

  const userId = req.params._id;
  const user = users.find(user => user._id == userId);
  if (!user) {
    res.json({ error: 'User not found' });
  }
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;

  let userPresent = log.find(log => log._id == userId)

  const newExercise = {
    username: user.username,
    count: userPresent ? userPresent.log.length + 1 : 1,
    _id: userId,
    log:[{
      description: description,
      duration: Number(duration),
      date:  date ? date : 
      new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date()),
      // new Date().toDateString(),
    }]
  }

  // const date = new Date();
  // const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
  // const formattedDate = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date());


  if(userPresent){
    userPresent.count = userPresent.log.length + 1;
    userPresent.log.push(newExercise.log[0]);
    res.json({newExercise});
  } else {
    log.push(newExercise);
    res.json({newExercise});
  }

})

app.get('/api/users/:_id/logs', (req, res) => {
  res.json(log);
})



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
