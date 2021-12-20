const router = require('express').Router();
const controller = require('../controllers/department');
const getDepartmentValidate = require('./validate/validation');

router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .post('/', getDepartmentValidate, controller.createOne)
  .put('/:id', getDepartmentValidate, controller.updateOne)
  .delete('/:id', controller.deleteOne);

module.exports = router;
