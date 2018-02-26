# boilerplate-express-passport-google-login

Boilerplate of Google Login with Express and Passport.

## Required

* Create your google account for development and register your app.
* Add Google Plus to your app account.
* Add `localhost:3000` to your app account.
* Add `localhost:3000/auth/google/callback` to your app account for callback.

## Create dot env files

```bash
$ touch .env
$ echo 'GOOGLE_CLIENT_ID={YOUR_CLIENT_ID}' >> .env
$ echo 'GOOGLE_CLIENT_SECRET={YOUR_CLIENT_SECRET}' >> .env
$ echo 'MONGO_URL={YOUR_MONGO_URL}' >> .env
$ echo 'COOKIE_KEY={ANY_NAME_OR_NOTHING_IS_OK}' >> .env
$ echo 'COOKIE_EXPIRED_DAYS={ANY_NUMBER_OR_NOTHING_IS_OK}' >> .env
```

## APIs

### Login API

* localhost:3000/auth/google

### GET User API

* localhost:3000/api/user

### Logout API

* localhost:3000/api/logout
