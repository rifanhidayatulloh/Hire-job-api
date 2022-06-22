const express = require('express');
const {
  listAllUser,
  updateProfileWorker,
  updateProfileCompany,
  updatePhoto,
  getDetail,
} = require('../controllers/user.controller');
const {
  companyValidation,
  workerValidation,
} = require('../validations/user.validation');
const validation = require('../middlewares/validation');
const jwtAuth = require('../middlewares/jwtAuth');
const { isWorker, isCompany } = require('../middlewares/authorization');
const upload = require('../middlewares/upload');

const router = express.Router();

router
  .get('/users', jwtAuth, listAllUser)
  .get('/users/:id', jwtAuth, getDetail)
  .put(
    '/users/update/worker',
    jwtAuth,
    isWorker,
    workerValidation,
    validation,
    updateProfileWorker
  )
  .put(
    '/users/update/company',
    jwtAuth,
    isCompany,
    companyValidation,
    validation,
    updateProfileCompany
  )
  .put('/users/update/photo', jwtAuth, upload, updatePhoto);

module.exports = router;
