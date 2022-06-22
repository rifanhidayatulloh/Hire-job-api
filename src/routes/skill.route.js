const express = require('express');
const jwtAuth = require('../middlewares/jwtAuth');
const { isWorker } = require('../middlewares/authorization');
const { insertSkills } = require('../controllers/skill.controller');

const router = express.Router();

router.put('/skill', jwtAuth, isWorker, insertSkills);

module.exports = router;
