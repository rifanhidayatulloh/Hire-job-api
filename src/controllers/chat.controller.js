const chatModel = require('../models/chat.model');
const userModel = require('../models/user.model');
const { success, failed } = require('../helpers/response');

const chatController = {
  insertChat: async (req, res) => {
    try {
      const companyId = req.APP_DATA.tokenDecoded.id;
      const company = req.APP_DATA.tokenDecoded.company;
      const email = req.APP_DATA.tokenDecoded.email;
      const { workerId } = req.body;

      const checkUser = await userModel.getDetail(workerId);

      const chat = `Setelah membaca keseluruhan  portofolio dan pengalaman kerja Bpk. ${checkUser.rows[0].fullname} di aplikasi hire job, bersama pesan ini kami sampaikan bahwa kami tertarik untuk menjalin kerja sama lebih lanjut dengan ${company}. Demikian pesan yang kami berikan. Apabila ada pertanyaan silahkan meneruskan email ${email}`;

      const result = await chatModel.chatInsert(workerId, companyId, chat);
      success(res, {
        code: 200,
        status: 'Success',
        message: 'success',
        data: null,
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
  getChat: async (req, res) => {
    try {
      const workerId = req.APP_DATA.tokenDecoded.id;
      const companyId = req.params.id;

      const result = await chatModel.getchat(workerId, companyId);
      success(res, {
        code: 200,
        status: 'Success',
        message: 'success',
        data: result.rows[0],
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
  listuser: async (req, res) => {
    try {
      const workerId = req.APP_DATA.tokenDecoded.id;

      const result = await chatModel.listuser(workerId);
      success(res, {
        code: 200,
        status: 'Success',
        message: 'success',
        data: result.rows[0],
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
