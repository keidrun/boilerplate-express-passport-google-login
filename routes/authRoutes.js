const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.send({ message: 'The user is logging in' });
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send({ message: 'The user logged out' });
  });

  app.get('/api/user', (req, res) => {
    res.send(req.user);
  });
};
