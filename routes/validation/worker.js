const { check } = require('express-validator');

const createWorkerValidation = [
  check('firstName').notEmpty().isString(),
  check('lastName').notEmpty().isString(),
  check('email').isEmail(),
  check('phoneNumber').notEmpty().isString().isLength({ min: 5 }),
  check('about').notEmpty().isString(),
];

module.exports = {
  createWorkerValidation,
};
