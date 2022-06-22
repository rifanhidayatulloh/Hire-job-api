const { check } = require('express-validator');

const experienceValidation = [
  // company
  check('company', 'company cannot be empty').not().isEmpty(),
  check('company', 'company require 3 or more characters').isLength({ min: 3 }),

  // year
  check('year', 'year cannot be empty').not().isEmpty(),
  check('year', 'year must be valid date (yyyy-mm-dd)').isDate(),

  // aboutExperience
  check('aboutExperience', 'aboutExperience cannot be empty').not().isEmpty(),
  check(
    'aboutExperience',
    'aboutExperience require 10 or more characters'
  ).isLength({
    min: 10,
  }),

  // position
  check('position', 'position cannot be empty').not().isEmpty(),
  check('position', 'position require 3 or more characters').isLength({
    min: 3,
  }),
];

module.exports = { experienceValidation };
