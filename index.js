const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const PORT = process.env.PORT || 3000;

require('./services/passport');

mongoose.connect(keys.mongoURL);

const app = express();

app.use(
  cookieSession({
    maxAge: keys.cookieExpiredDays * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Auth
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log(`Google Auth Server is starting on ${PORT}`);
});
