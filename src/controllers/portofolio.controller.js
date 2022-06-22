const portofolioModel = require('../models/portofolio.model');
const { failed, success } = require('../helpers/response');
const { v4: uuidv4 } = require('uuid');
const deleteFile = require('../utils/deleteFile');

const portofolioController = {
  getAll: async (req, res) => {
    try {
      // const { userId } = req.body;
      const userId = req.params.id;
      let { sortField, sortType, page, limit, search } = req.query;
      page = Number(page);
      limit = Number(limit);
      const getSearch = !search ? '' : search;
      const sortByField = !sortField ? 'name_app' : sortField;
      const sortByType =
        sortType === 'ASC' || sortType === 'DESC' ? sortType : 'ASC';
      const getPage = !page ? 1 : page;
      const getLimit = !limit ? 10 : limit;
      const offset = (getPage - 1) * getLimit;
      const allData = await portofolioModel.getCount(userId);
      const totalData = Number(allData.rows[0].total);
      const result = await portofolioModel.getAll(
        sortByField,
        sortByType,
        getLimit,
        offset,
        getSearch,
        userId
      );
      if (result.rowCount == 0) {
        failed(res, {
          code: 400,
          status: 'Error',
          message: 'Data not found',
          error: null,
        });
        return;
      }
      if (search) {
        const pagination = {
          currentPage: getPage,
          currentLimit: getLimit,
          totalPage: Math.ceil(result.rowCount / getLimit),
        };
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Get all portofolio success',
          data: result.rows,
          pagination,
        });
      } else {
        const pagination = {
          currentPage: getPage,
          currentLimit: getLimit,
          totalPage: Math.ceil(totalData / getLimit),
        };
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Get all portofolio success',
          data: result.rows,
          pagination,
        });
      }
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'Get all portofolio failed',
        error: err.message,
      });
    }
  },
  insertPortofolio: async (req, res) => {
    try {
      const userId = req.APP_DATA.tokenDecoded.id;
      const id = uuidv4();
      const { nameApp, linkRepo, typeApp, photo } = req.body;
      // const photo = req.file.filename;
      // if (!req.file) {
      //   const err = {
      //     message: 'Image is required',
      //   };
      //   failed(res, {
      //     code: 500,
      //     status: 'error',
      //     message: err.message,
      //     error: [],
      //   });
      //   return;
      // }
      const result = await portofolioModel.insertPortofolio(
        id,
        nameApp,
        linkRepo,
        typeApp,
        photo,
        userId
      );
      success(res, {
        code: 200,
        status: 'Success',
        message: 'Insert portofolio success',
        data: req.body,
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'Insert portofolio failed',
        error: err.message,
      });
    }
  },
  updatePortofolio: async (req, res) => {
    try {
      const id = req.params.id;
      const userId = req.APP_DATA.tokenDecoded.id;
      const { nameApp, linkRepo, typeApp } = req.body;
      let photo;
      const cekPortofolio = await portofolioModel.getDetail(id);
      if (cekPortofolio.rowCount == 0) {
        failed(res, {
          code: 400,
          status: 'error',
          message: 'Id not found',
          error: null,
        });
        return;
      }
      if (req.file) {
        photo = req.file.filename;
        deleteFile(`./public/portofolio/${cekPortofolio.rows[0].photo}`);
      } else {
        photo = cekPortofolio.rows[0].photo;
      }
      const result = await portofolioModel.updatePortofolio(
        id,
        nameApp,
        linkRepo,
        typeApp,
        photo,
        userId
      );
      success(res, {
        code: 200,
        status: 'Success',
        message: 'Update portofolio success',
        data: req.body,
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'Update portofolio failed',
        error: err.message,
      });
    }
  },
  deletePortofolio: async (req, res) => {
    try {
      const userId = req.APP_DATA.tokenDecoded.id;
      const id = req.params.id;
      const cekPortofolio = await portofolioModel.getDetail(id);
      if (cekPortofolio.rowCount == 0) {
        failed(res, {
          code: 400,
          status: 'error',
          message: 'Id not found',
          error: null,
        });
        return;
      }
      const result = await portofolioModel.deletePortofolio(id, userId);
      success(res, {
        code: 200,
        status: 'Success',
        message: 'Delete portofolio success',
        data: result,
      });
      deleteFile(`./public/portofolio/${cekPortofolio.rows[0].photo}`);
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'Delete portofolio failed',
        error: err.message,
      });
    }
  },
};

module.exports = portofolioController;
