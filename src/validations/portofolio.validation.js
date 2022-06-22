const { check } = require('express-validator');

const portofolioValidation = [
  // nameApp
  check('nameApp', 'nameApp required').not().isEmpty(),
  check('nameApp', 'nameApp require 3 or more characters').isLength({
    min: 3,
  }),

  // linkRepo
  check('linkRepo', 'linkRepo required').not().isEmpty(),
  check('linkRepo', 'please enter linkRepo correctly').isURL(),
  check('linkRepo', 'linkRepo require 4 or more characters').isLength({
    min: 4,
  }),

  // typeApp
  check('typeApp', 'typeApp required').not().isEmpty(),
  check('typeApp', 'typeApp value must be between 0 to 1').isInt({
    min: 0,
    max: 1,
  }),
];

module.exports = { portofolioValidation };
