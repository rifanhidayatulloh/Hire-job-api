require('dotenv').config();

module.exports = {
  // application
  APP_NAME: process.env.APP_NAME || 'Hire Job',
  APP_VERSION: process.env.APP_VERSION || '1.0.0',
  APP_STATUS: process.env.APP_STATUS || 'development',
  PORT: process.env.PORT || 3501,

  // database
  PG_HOST: process.env.PG_HOST,
  PG_USER: process.env.PG_USER,
  PG_PASSWORD: process.env.PG_PASSWORD,
  PG_DATABASE: process.env.PG_DATABASE,
  PG_PORT: process.env.PG_PORT,

  // jwt Secret
  JWT_SECRET: process.env.JWT_SECRET,

  // email
  GMAIL_USER: process.env.GMAIL_USER,
  GMAIL_PASS: process.env.GMAIL_PASS,
  EMAIL_SENDER: process.env.EMAIL_SENDER,

  // api
  APP_URL: process.env.APP_URL,
  APP_CLIENT: process.env.APP_CLIENT,
};
