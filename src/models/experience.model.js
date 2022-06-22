const db = require('../config/db');

const experienceModel = {
  getCount: (userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT COUNT(*) AS total FROM experience WHERE user_id='${userId}'`,
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
  getAll: (sortByField, sortByType, getLimit, offset, getSearch, userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM experience WHERE (company ILIKE '%${getSearch}%' AND user_id='${userId}') ORDER BY ${sortByField} ${sortByType} LIMIT ${getLimit} OFFSET ${offset}`,
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
  getDetail: () => {
    return new Promise((resolve, reject) => {
      db.query(``, (err, result) => {
        if (err) {
          reject(new Error(err.message));
        } else {
          resolve(result);
        }
      });
    });
  },
  insertExperience: (
    id,
    company,
    year,
    aboutExperience,
    userId,
    position,
    photo
  ) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO experience (id, company, year, about_experience, user_id, positions, photo) VALUES ('${id}', '${company}', '${year}', '${aboutExperience}', '${userId}', '${position}', '${photo}')`,
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
  updateExperience: (id, company, year, aboutExperience, position, userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE experience SET company='${company}', year='${year}', about_experience='${aboutExperience}', positions='${position}' WHERE (id='${id}' AND user_id='${userId}')`,
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
  deleteExperence: (id, userId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM experience WHERE (id='${id}' AND user_id='${userId}')`,
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

module.exports = experienceModel;
