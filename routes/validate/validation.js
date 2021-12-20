const { check, validationResult } = require('express-validator');

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  }
  return next();
};

const userValidation = [
  check('first_Name').notEmpty().isString(),
  check('last_Name').notEmpty().isString(),
  check('email').notEmpty().isEmail(),
  check('phoneNumber').notEmpty().isLength({ min: 5 }),
  check('about').notEmpty().isString(),
];
const getUserValidate = [...userValidation, validateInput];

module.exports = getUserValidate;
