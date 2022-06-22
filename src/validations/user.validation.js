const { check } = require('express-validator');

const workerValidation = [
  // name
  check('name', 'Name cannot be empty').not().isEmpty(),
  check('name', 'Name require 3 or more characters').isLength({ min: 3 }),

  // jobDesk
  check('jobDesk', 'Job Desk cannot be empty').not().isEmpty(),
  check('jobDesk', 'Job Desk require 5 or more characters').isLength({
    min: 5,
  }),

  // address
  check('address', 'Address cannot be empty').not().isEmpty(),
  check('address', 'Address require 3 or more characters').isLength({
    min: 3,
  }),

  // workplace
  check('workplace', 'Workplace cannot be empty').not().isEmpty(),
  check('workplace', 'Workplace require 3 or more characters').isLength({
    min: 3,
  }),

  // aboutUser
  check('aboutUser', 'About user cannot be empty').not().isEmpty(),
  check('aboutUser', 'About user require 10 or more characters').isLength({
    min: 10,
  }),
];

const companyValidation = [
  // company
  check('company', 'company cannot be empty').not().isEmpty(),
  check('company', 'company require 3 or more characters').isLength({ min: 3 }),

  // fieldCompany
  check('fieldCompany', 'fieldCompany cannot be empty').not().isEmpty(),
  check('fieldCompany', 'fieldCompany require 5 or more characters').isLength({
    min: 5,
  }),

  // address
  check('address', 'Address cannot be empty').not().isEmpty(),
  check('address', 'Address require 3 or more characters').isLength({
    min: 3,
  }),

  // about
  check('about', 'About cannot be empty').not().isEmpty(),
  check('about', 'About require 10 or more characters').isLength({
    min: 10,
  }),

  // email
  check('email', 'Email required').not().isEmpty(),
  check('email', 'please enter email correctly').isEmail(),
  check('email', 'Email maximum length is 50 characters').isLength({ max: 50 }),

  // instagram
  check('instagram', 'instagram cannot be empty').not().isEmpty(),
  check('instagram', 'instagram require 3 or more characters').isLength({
    min: 3,
  }),

  // phone
  check('phone', 'Phone cannot be empty').not().isEmpty(),
  check('phone', 'please enter phone correctly').isNumeric(),
  check('phone', 'Phone require 12 or more characters').isLength({
    min: 12,
    max: 20,
  }),

  // linkedin
  check('linkedin', 'linkedin cannot be empty').not().isEmpty(),
  check('linkedin', 'linkedin require 4 or more characters').isLength({
    min: 4,
  }),
];

const isActiveValidation = [
  // is active
  check('status', 'status cannot be empty').not().isEmpty(),
  check('status', 'status only number 0 or 1').isNumeric(),
  check('status', 'status value must be between 0 to 1').isInt({
    min: 0,
    max: 1,
  }),
];

module.exports = { workerValidation, isActiveValidation, companyValidation };
