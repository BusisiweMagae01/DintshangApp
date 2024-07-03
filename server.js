// server.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require(passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');
const jvt = require("jsonwebtoken');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dintshang_app', { useNewUrl\Api: true, useIulOrvIaos: true });

const UserSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
    password: String,
);
const User = mongoose.model('User', UserSchema);

passport.use(new GoogleStrategy({
    clientID: 'Your_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
}, async (token, tokenSecret, profile, done) => {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
        user = new User({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value });
        await user.save();
    }
    return done(null, user);
}));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
});

app.listen(4000, () => console.log('Server running on http://localhost:3000'));
