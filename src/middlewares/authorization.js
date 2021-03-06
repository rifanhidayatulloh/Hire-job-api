const authModel = require('../models/auth.model');
const { failed } = require('../helpers/response');

module.exports = {
  isVerified: async (req, res, next) => {
    try {
      const emailCheck = await authModel.emailCheck(req.body.email);
      if (emailCheck.rowCount < 1) {
        const err = {
          message: 'Email not registered',
        };
        failed(res, {
          code: 500,
          status: 'error',
          message: err.message,
          error: [],
        });
        return;
      }
      if (emailCheck.rowCount > 0) {
        next();
      } else if (emailCheck.rows[0].is_verified) {
        next();
      } else if (emailCheck.rows[0].verify_token) {
        failed(res, {
          code: 400,
          status: 'failed',
          message: 'please using your token for access application',
          error: err,
        });
      }
    } catch (error) {
      failed(res, {
        code: 500,
        status: 'failed',
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  },
  isCompany: (req, res, next) => {
    if (req.APP_DATA.tokenDecoded.level === 1) {
      next();
    } else {
      failed(res, {
        code: 500,
        status: 'failed',
        message: 'worker dont have access',
        error: [],
      });
    }
  },
  isWorker: (req, res, next) => {
    if (req.APP_DATA.tokenDecoded.level === 0) {
      next();
    } else {
      failed(res, {
        code: 500,
        status: 'failed',
        message: 'company dont have access',
        error: [],
      });
    }
  },
};
