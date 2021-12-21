const { validationResult } = require('express-validator');
const workerValidation = require('./worker');
const departmentValidation = require('./department');

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  }
  return next();
};

module.exports = {
  validateInput,
  ...workerValidation,
  ...departmentValidation,
};
