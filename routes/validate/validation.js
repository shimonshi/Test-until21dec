const { check, validationResult } = require('express-validator');

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  }
  return next();
};

const workerValidation = [
  check('fName').notEmpty().isString(),
  check('lName').notEmpty().isString(),
  check('email').notEmpty().isEmail(),
  check('pNumber').notEmpty().isLength({ min: 5 }),
  check('about').notEmpty().isString(),
];
const getWorkerValidation = [...workerValidation, validateInput];

const departmentValidation = [
  check('name').notEmpty().isString(),
  check('info').notEmpty().isString(),
];
const getDepartmentValidate = [...departmentValidation, validateInput];

module.exports = getWorkerValidation;
module.exports = getDepartmentValidate;
