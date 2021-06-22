// importing modules
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport")
const db = require("./configs/database");
const app = express();

// making the connection to mongo database
mongoose.connect(db.config.uri, db.config.options);

// setting the template engine to use ejs.
app.set("view engine", "ejs");

// middlewares for express routes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// express routes that exist
app.use('/add', require('./routes/add'));
app.use('/remove', require('./routes/remove'));
app.use('/edit', require('./routes/edit'));
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/index'));

// functions for persistant sessions
passport.serializeUser(function (user_id, done) { done(null, user_id); });
passport.deserializeUser(function (user_id, done) { done(null, user_id); });

app.listen(process.env.PORT || 3000, function () {
  console.log("listening on port 3000!");
});


// "bcrypt": "^3.0.0",
//     "body-parser": "^1.18.3",
//     "ejs": "^2.6.1",
//     "express": "^4.16.3",
//     "express-session": "^1.15.6",
//     "mongoose": "^5.2.13",
//     "passport": "^0.4.0",
//     "validator": "^10.7.1"