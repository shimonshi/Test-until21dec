const { check } = require('express-validator');

const createDepartmentValidation = [
  check('name').notEmpty().isString(),
  check('info').notEmpty().isString(),
];

module.exports = {
  createDepartmentValidation,
};
