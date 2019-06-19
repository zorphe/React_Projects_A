const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
    // provide the user a token
    Response.send({ token: tokenForUser(req.user) });
}

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    // check if user with the provided email exists
    User.findOne({ email: email }, (err, existingUser) => {
        if (err) { return next(err); }
        if (!email || !password) {
            return res.status(422).send({ error: 'You must provide email and password.' });
        }

        // if a user does exist, return error
        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }

        // if a user does not exist: create + save user record
        const user = new User({
            email: email,
            password: password
        });

        user.save((err) => {
            if (err) { return next(err); }

            // respond to request indicating user-creation
            res.json({ token: tokenForUser(user) });
        });
    });
}