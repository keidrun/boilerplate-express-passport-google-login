const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  displayName: String,
  name: {
    familyName: String,
    givenName: String
  },
  email: String,
  avatarUrl: String,
  gender: String,
  language: String,
  googleId: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;
