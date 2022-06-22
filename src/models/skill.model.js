const db = require('../config/db');

const skillModel = {
  insertSkills: (userId, skills) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET skills='${skills}' WHERE id='${userId}'`,
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

module.exports = skillModel;
