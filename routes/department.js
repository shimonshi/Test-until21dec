const router = require('express').Router();
const controller = require('../controllers/department');
const { createDepartmentValidation } = require('./validation');

router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .post('/', createDepartmentValidation, controller.createOne)
  .put('/:id', createDepartmentValidation, controller.updateOne)
  .delete('/:id', controller.deleteOne);

module.exports = router;
