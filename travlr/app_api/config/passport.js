const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Users = require('../models/user'); // Import the User model
const User = mongoose.model('users'); // Create a User model instance

passport.use(new LocalStrategy({
    usernameField: 'email',
}, async (username, password, done) => {
    const q = await User.findOne({ email: username }).exec();
    if (!q) {
        return done(null, false, { message: 'Incorrect username.' }); // unable to find username in db
    }
    if (!q.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' }); // username/password mismatch
    }
    return done(null, q);
    }
))
