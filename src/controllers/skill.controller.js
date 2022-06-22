const skillModel = require('../models/skill.model');
const { v4: uuidv4 } = require('uuid');
const { success, failed } = require('../helpers/response');

const experienceController = {
  insertSkills: async (req, res) => {
    try {
      const id = req.APP_DATA.tokenDecoded.id;
      const { skill } = req.body;
      const result = await skillModel.insertSkills(id, skill);
      if (result.rowCount == 0) {
        failed(res, {
          code: 400,
          status: 'Error',
          message: 'Id not found',
          error: null,
        });
        return;
      }
      success(res, {
        code: 200,
        status: 'Success',
        message: 'Insert skills success',
        data: req.body,
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'Insert skills failed',
        error: err.message,
      });
    }
  },
};

module.exports = experienceController;
