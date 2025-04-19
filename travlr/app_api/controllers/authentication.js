const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/user'); // Create a User model instance

const register = async (req, res) => {
    // Validate message to insure that all params are present

    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'All fields required' });
    }

    const user = new User(
        {
            name: req.body.name, // set user name
            email: req.body.email, // set e-mail address
            password: ''    // set password to empty string

        });

    user.setPassword(req.body.password); // set user password
    const q = await user.save();
    if (!q) {
        // Database returened no data
        return res.status(400).json(err);
    } else {

        const token = user.generateJWT(); // generate a token for the new user
        return res.status(200).json(token); // send token to client
    }
};

const login = (req, res, next) => {
    // Validate message to ensure that email and password are present.
    if (!req.body.email || !req.body.password) {
        return next(err)
    }
    // Delegate authentication to passport module
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            // Error in Authentication Process
            return res
                .status(404)
                .json(err); // pass error to the next middleware
        }
        if (user) { // Auth succeeded - generate JWT and return to caller
            const token = user.generateJWT();
            res
                .status(200)
                .json({ token });
        } else { // Auth failed return error
            res
                .status(401)
                .json(info);
        }
    })(req, res, next);
};

module.exports = {
    register,
    login
};