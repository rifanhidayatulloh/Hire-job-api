const express = require('express');

const { isVerified } = require('../middlewares/authorization');
const {
  registerValidation,
  loginValidation,
  forgotValidation,
  resetValidation,
} = require('../validations/auth.validation');
const validation = require('../middlewares/validation');
const {
  register,
  login,
  verifyEmail,
} = require('../controllers/auth.controller');

const router = express.Router();

router
  .get('/auth/verify-email', verifyEmail)
  .post('/auth/register', registerValidation, validation, register)
  .post('/auth/login', loginValidation, validation, login);
// .put(
//   '/auth/forgot-password',
//   isVerified,
//   forgotValidation,
//   validation,
//   forgotPassword
// )
// .put('/auth/reset-password', resetValidation, validation, resetPassword);

module.exports = router;
