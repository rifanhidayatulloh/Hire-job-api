const { v4: uuidv4 } = require('uuid');
const { success, failed } = require('../helpers/response');
const experienceModel = require('../models/experience.model');

const experienceController = {
  getAll: async (req, res) => {
    try {
      // const { userId } = req.body;
      const userId = req.params.id;
      let { sortField, sortType, page, limit, search } = req.query;
      page = Number(page);
      limit = Number(limit);
      const getSearch = !search ? '' : search;
      const sortByField = !sortField ? 'company' : sortField;
      const sortByType =
        sortType === 'ASC' || sortType === 'DESC' ? sortType : 'ASC';
      const getPage = !page ? 1 : page;
      const getLimit = !limit ? 10 : limit;
      const offset = (getPage - 1) * getLimit;
      const allData = await experienceModel.getCount(userId);
      const totalData = Number(allData.rows[0].total);
      const result = await experienceModel.getAll(
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
          message: 'Get all experience success',
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
          message: 'Get all experience success',
          data: result.rows,
          pagination,
        });
      }
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'Get all experience failed',
        error: err.message,
      });
    }
  },
  insertExperience: async (req, res) => {
    try {
      const id = uuidv4();
      const userId = req.APP_DATA.tokenDecoded.id;
      const { company, year, aboutExperience, position, photo } = req.body;
      const result = await experienceModel.insertExperience(
        id,
        company,
        year,
        aboutExperience,
        userId,
        position,
        photo
      );
      success(res, {
        code: 200,
        status: 'Success',
        message: 'Insert experience success',
        data: req.body,
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'Insert experience failed',
        error: err.message,
      });
    }
  },
  updateExperience: async (req, res) => {
    try {
      const userId = req.APP_DATA.tokenDecoded.id;
      const id = req.params.id;
      const { company, year, aboutExperience, position } = req.body;
      const result = await experienceModel.updateExperience(
        id,
        company,
        year,
        aboutExperience,
        position,
        userId
      );
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
        message: 'Update experience success',
        data: req.body,
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'Update experience failed',
        error: err.message,
      });
    }
  },
  deleteExperence: async (req, res) => {
    try {
      const userId = req.APP_DATA.tokenDecoded.id;
      const id = req.params.id;
      const result = await experienceModel.deleteExperence(id, userId);
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
        message: `Delete experience with id ${id} success`,
        data: null,
      });
    } catch (err) {
      failed(res, {
        code: 500,
        status: 'Error',
        message: 'Delete experience failed',
        error: err.message,
      });
    }
  },
};

module.exports = experienceController;
