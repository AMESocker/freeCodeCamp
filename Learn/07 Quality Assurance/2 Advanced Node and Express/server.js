'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
//? 3 3 Set up Passport
const session = require('express-session');
const passport = require('passport');
//?-----------------------------------
const { ObjectID } = require('mongodb');

const app = express();

//? 1 Set up a Template Engine
app.set('view engine', 'pug');
app.set('views', './views/pug');
//?-----------------------------------
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
//?------------------------------------
  //? 2 Use a Template Engine's Powers
  app.route('/').get((req, res) => {
    res.render('index', {
      title: 'Connected to Database',
      message: 'Please log in'
    });
  });
  //?------------------------------------

  //? 4 Serialization of a User Object
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
      done(null, doc);
    });
  });
  //? 5 Implement the Serialization of a Passport User
}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to connect to database' });
  });
});
//?------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
