const User = require('../models/user');
const passport = require('passport');
const viewPath = 'sessions';

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'Login'
  });
};

exports.create = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/reservations',
    successFlash: 'Congrats, you were successfully logged in!',
    failureRedirect: '/login',
    failureFlash: 'Sorry, your email or password is wrong'
  })(req, res, next);
};

exports.delete = (req, res) => {
  req.logout();
  req.flash('success', 'You were logged out successfully.');
  res.redirect('/');
};