const userModel = require('../models/user.model');
const { success, failed } = require('../helpers/response');
const deleteFile = require('../utils/deleteFile');

const userController = {
  listAllUser: async (req, res) => {
    try {
      let { sortField, sortType, page, limit, search } = req.query;
      page = Number(page);
      limit = Number(limit);
      const getSearch = !search ? '' : search;
      const sortByField = !sortField ? 'id' : sortField;
      const sortByType =
        sortType === 'ASC' || sortType === 'DESC' ? sortType : 'ASC';
      const getPage = !page ? 1 : page;
      const getLimit = !limit ? 10 : limit;
      const offset = (getPage - 1) * getLimit;
      const allData = await userModel.getCountUsers();
      const totalData = Number(allData.rows[0].total);
      const result = await userModel.selectAllUsers(
        sortByField,
        sortByType,
        getLimit,
        offset,
        getSearch
      );
      if (result.rowCount === 0) {
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
          message: 'Get worker success',
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
          message: 'Get all worker success',
          data: result.rows,
          pagination,
        });
      }
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Error',
        message: 'Get all worker failed',
        error: err.message,
      });
    }
  },
  getDetail: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await userModel.getDetail(id);
      success(res, {
        code: 200,
        status: 'Success',
        message: 'Get worker success',
        data: result.rows[0],
      });
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Error',
        message: 'Get worker failed',
        error: err.message,
      });
    }
  },
  updateProfileWorker: async (req, res) => {
    try {
      const id = req.APP_DATA.tokenDecoded.id;
      const { name, jobDesk, address, workplace, aboutUser, skills } = req.body;
      const result = await userModel.updateProfileWorker(
        name,
        jobDesk,
        address,
        workplace,
        aboutUser,
        id,
        skills
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
        message: 'Update profile worker success',
        data: req.body,
      });
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Failed',
        message: 'Update profile worker failed',
        error: err.message,
      });
    }
  },
  updateProfileCompany: async (req, res) => {
    try {
      const id = req.APP_DATA.tokenDecoded.id;
      const {
        company,
        fieldCompany,
        address,
        about,
        email,
        instagram,
        phone,
        linkedin,
      } = req.body;
      const detailId = await userModel.getDetail(id);
      const emailCheck = await userModel.emailCheck(email);
      const phoneCheck = await userModel.phoneCheck(phone);
      if (email != detailId.rows[0].email) {
        if (emailCheck.rowCount > 0) {
          failed(res, {
            code: 400,
            status: 'Error',
            message: 'Email is already exist',
            error: null,
          });
          return;
        }
      }
      if (phone != detailId.rows[0].phone) {
        if (phoneCheck.rowCount > 0) {
          failed(res, {
            code: 400,
            status: 'Error',
            message: 'Phone is already exist',
            error: null,
          });
          return;
        }
      }

      const result = await userModel.updateProfileCompany(
        id,
        company,
        fieldCompany,
        address,
        about,
        email,
        instagram,
        phone,
        linkedin
      );
      success(res, {
        code: 200,
        status: 'Success',
        message: 'Update profile company success',
        data: req.body,
      });
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Failed',
        message: 'Update profile company failed',
        error: err.message,
      });
    }
  },
  updatePhoto: async (req, res) => {
    try {
      const id = req.APP_DATA.tokenDecoded.id;
      const checkPhoto = await userModel.getPhoto(id);
      const getPhoto = checkPhoto.rows[0].photo;
      const filePhoto = req.file.filename;
      if (getPhoto === 'profile-default.png') {
        const result = await userModel.updatePhoto(filePhoto, id);
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Update photo success',
          data: result,
        });
      } else {
        const result = await userModel.updatePhoto(filePhoto, id);
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Update photo success',
          data: result,
        });
        deleteFile(`./public/users/${getPhoto}`);
      }
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Failed',
        message: 'Update photo failed',
        error: err.message,
      });
    }
  },
  updateStatus: async (req, res) => {
    try {
      const id = req.params.id;
      const { status } = req.body;
      const getUserDetail = await userModel.getDetail(id);
      if (getUserDetail.rowCount == 0) {
        failed(res, {
          code: 400,
          status: 'Error',
          message: `User with Id ${id} not found`,
          error: null,
        });
        return;
      }
      if (getUserDetail.rows[0].is_active == status) {
        if (status == '1') {
          failed(res, {
            code: 400,
            status: 'Error',
            message: `User with id ${id} have been active`,
            error: null,
          });
        } else {
          failed(res, {
            code: 400,
            status: 'Error',
            message: `User with id ${id} have been non active`,
            error: null,
          });
        }
        return;
      }
      if (status === '0') {
        const result = await userModel.updateIsActive(status, id);
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Update status user success',
          data: req.body,
        });
      } else {
        const result = await userModel.updateNonActive(status, id);
        success(res, {
          code: 200,
          status: 'Success',
          message: 'Update status user success',
          data: req.body,
        });
      }
    } catch (err) {
      failed(res, {
        code: 400,
        status: 'Error',
        message: 'Update status user failed',
        error: err.message,
      });
    }
  },
};

module.exports = userController;
