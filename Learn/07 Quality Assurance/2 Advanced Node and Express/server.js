'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
//? 3 Set up Passport
const session = require('express-session');
const passport = require('passport');
//? 13 Clean Up Your Project with Modules
const routes = require('./routes.js');
const auth = require('./auth.js');
//?-----------------------------------
const app = express();
//? 17 Set up the Environment
const http = require('http').createServer(app);
const io = require('socket.io')(http);
//? 1 Set up a Template Engine
app.set('view engine', 'pug');
app.set('views', './views/pug');
//? 3 Set up Passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
//?-----------------------------------
fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//? 5 Implement the Serialization of a Passport User
myDB(async client => {
  const myDataBase = await client.db('database').collection('users');
  //? 13 Clean Up Your Project with Modules
  routes(app, myDataBase);
  auth(app, myDataBase);
  //? 17 Set up the Environment
  io.on('connection', socket => {
    console.log('A user has connected');
  });
  //? 5 Implement the Serialization of a Passport User
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to connect to database' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
