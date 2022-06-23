const express = require('express');
const jwtAuth = require('../middlewares/jwtAuth');
const { isWorker, isCompany } = require('../middlewares/authorization');
const {
  insertChat,
  getChat,
  listuser,
} = require('../controllers/chat.controller');

const router = express.Router();

router
  .post('/chat', jwtAuth, insertChat)
  .get('/chat/:id', jwtAuth, getChat)
  .get('/listuser', jwtAuth, listuser);

module.exports = router;
