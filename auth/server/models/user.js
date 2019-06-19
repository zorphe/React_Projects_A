const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// define model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// on Save Hook, encrypt password
userSchema.pre('save', (next) => {
    const user = this;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }

        // encrypt password using the salt
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { return next(err); }

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = (candidatepassword, callback) => {
    bcrypt.compare(candidatepassword, this.password, (err, isMatch) => {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
};

// create model class
const ModelClass = mongoose.model('user', userSchema);

// export model
module.exports = ModelClass;