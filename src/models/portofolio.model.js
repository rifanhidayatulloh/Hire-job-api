const db = require('../config/db');

const portofolioModel = {
  getCount: (userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT COUNT(*) AS total FROM portofolio WHERE user_id='${userId}'`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM portofolio WHERE id='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err.message));
        } else {
          resolve(result);
        }
      });
    });
  },
  getAll: (sortByField, sortByType, getLimit, offset, getSearch, userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM portofolio WHERE (name_app ILIKE '%${getSearch}%' AND user_id='${userId}') ORDER BY ${sortByField} ${sortByType} LIMIT ${getLimit} OFFSET ${offset}`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  insertPortofolio: (id, nameApp, linkRepo, typeApp, photo, userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO portofolio (id, name_app, link_repo, type_app, photo, user_id) VALUES ('${id}', '${nameApp}', '${linkRepo}', '${typeApp}', '${photo}', '${userId}')`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  updatePortofolio: (id, nameApp, linkRepo, typeApp, photo, userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE portofolio SET name_app='${nameApp}', link_repo='${linkRepo}', type_app='${typeApp}', photo='${photo}' WHERE (id='${id}' AND user_id='${userId}')`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  deletePortofolio: (id, userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM portofolio WHERE (id='${id}' AND user_id='${userId}')`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};

module.exports = portofolioModel;
