const db = require('../config/db');

const userModel = {
  getCountUsers: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT COUNT(*) AS total FROM users WHERE level=0`,
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
  selectAllUsers: (sortByField, sortByType, getLimit, offset, getSearch) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM users WHERE (fullname ILIKE '%${getSearch}%' AND level=0) ORDER BY ${sortByField} ${sortByType} LIMIT ${getLimit} OFFSET ${offset}`,
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
      db.query(`SELECT * FROM users WHERE id='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err.message));
        } else {
          resolve(result);
        }
      });
    });
  },
  updateProfileWorker: (
    name,
    jobDesk,
    address,
    workplace,
    aboutUser,
    id,
    skills
  ) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET fullname='${name}', job_desk='${jobDesk}', address='${address}', workplace='${workplace}', about='${aboutUser}', skills='${skills}' WHERE id='${id}'`,
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
  emailCheck: (email) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE email='${email}'`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  phoneCheck: (phone) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE phone='${phone}'`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  updateProfileCompany: (
    id,
    company,
    fieldCompany,
    address,
    about,
    email,
    instagram,
    phone,
    linkedin
  ) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET company='${company}', field_company='${fieldCompany}', address='${address}', about='${about}', email='${email}', intagram='${instagram}', phone='${phone}', linkedin='${linkedin}' WHERE id='${id}'`,
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
  getPhoto: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT photo FROM users WHERE id='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err.message));
        } else {
          resolve(result);
        }
      });
    });
  },
  updatePhoto: (photo, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET photo='${photo}' WHERE id='${id}'`,
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
  updateIsActive: (active, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET is_active='${active}', deleted_at=NOW() WHERE id='${id}'`,
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
  updateNonActive: (nonActive, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET is_active='${nonActive}', updated_at=NOW() WHERE id='${id}'`,
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

module.exports = userModel;
