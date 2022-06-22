const express = require('express');
const jwtAuth = require('../middlewares/jwtAuth');
const { isWorker } = require('../middlewares/authorization');
const validation = require('../middlewares/validation');
const {
  experienceValidation,
} = require('../validations/experience.validation');
const {
  getAll,
  insertExperience,
  updateExperience,
  deleteExperence,
} = require('../controllers/experience.controller');

const router = express.Router();

router
  .get('/experience/:id', jwtAuth, getAll)
  .post(
    '/experience',
    jwtAuth,
    isWorker,
    experienceValidation,
    validation,
    insertExperience
  )
  .put(
    '/experience/:id',
    jwtAuth,
    isWorker,
    experienceValidation,
    validation,
    updateExperience
  )
  .delete('/experience/:id', jwtAuth, isWorker, deleteExperence);

module.exports = router;
