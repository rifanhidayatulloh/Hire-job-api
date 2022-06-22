const express = require('express');
const {
  getAll,
  insertPortofolio,
  updatePortofolio,
  deletePortofolio,
} = require('../controllers/portofolio.controller');
const validation = require('../middlewares/validation');
const {
  portofolioValidation,
} = require('../validations/portofolio.validation');
const jwtAuth = require('../middlewares/jwtAuth');
const { isWorker } = require('../middlewares/authorization');
const upload = require('../middlewares/uploadPortofolio');

const router = express.Router();

router
  .get('/portofolio/detail/:id', jwtAuth, getAll)
  .post('/portofolio', jwtAuth, isWorker, upload, insertPortofolio)
  .put('/portofolio/:id', jwtAuth, isWorker, upload, updatePortofolio)
  .delete('/portofolio/:id', jwtAuth, isWorker, deletePortofolio);

module.exports = router;
