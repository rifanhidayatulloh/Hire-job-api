const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const chatModel = {
  chatInsert: (workerId, companyId, chat) => {
    const id = uuidv4();
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO chat (id, worker_id, company_id, chat) VALUES ( '${id}', '${workerId}', '${companyId}', '${chat}')`,
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  },
  getchat: (workerId, companyId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM chat WHERE worker_id='${workerId}' AND company_id='${companyId}'`,
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
  listuser: (workerId) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM chat where worker_id='${workerId}'`,
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
  chat: () => {
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
  chat: () => {
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
};

module.exports = chatModel;
