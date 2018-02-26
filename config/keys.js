require('dotenv').config();

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURL: process.env.MONGO_URL,
  cookieKey: process.env.COOKIE_KEY || 'google-auth-key',
  cookieExpiredDays: process.env.COOKIE_EXPIRED_DAYS || 30
};
