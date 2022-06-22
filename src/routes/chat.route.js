const express = require('express');
const jwtAuth = require('../middlewares/jwtAuth');
const { isWorker, isCompany } = require('../middlewares/authorization');

const router = express.Router();

router.get('/chat', jwtAuth).get('/chat/:id', jwtAuth);

module.exports = router;
