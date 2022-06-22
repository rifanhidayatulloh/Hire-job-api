const db = require('../config/db');

const chatModel = {
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
