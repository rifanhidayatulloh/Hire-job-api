const chatModel = require('../models/chat.model');
const { success, failed } = require('../helpers/response');

const chatController = {
  chat: async (req, res) => {
    try {
      success(res, {
        code: 200,
        status: 'Success',
        message: 'success',
        data: 'req.body',
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'failed',
        error: err.message,
      });
    }
  },
  chat: async (req, res) => {
    try {
      success(res, {
        code: 200,
        status: 'Success',
        message: 'success',
        data: 'req.body',
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'failed',
        error: err.message,
      });
    }
  },
  chat: async (req, res) => {
    try {
      success(res, {
        code: 200,
        status: 'Success',
        message: 'success',
        data: 'req.body',
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'failed',
        error: err.message,
      });
    }
  },
  chat: async (req, res) => {
    try {
      success(res, {
        code: 200,
        status: 'Success',
        message: 'success',
        data: 'req.body',
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'failed',
        error: err.message,
      });
    }
  },
  chat: async (req, res) => {
    try {
      success(res, {
        code: 200,
        status: 'Success',
        message: 'success',
        data: 'req.body',
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'failed',
        error: err.message,
      });
    }
  },
};

module.exports = chatController;
