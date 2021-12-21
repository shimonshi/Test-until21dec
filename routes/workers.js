const router = require('express').Router();
const controller = require('../controllers/worker');
const { createWorkerValidation, validateInput } = require('./validation');

router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .post('/', createWorkerValidation, validateInput, controller.createOne)
  .put('/:id', createWorkerValidation, validateInput, controller.updateOne)
  .delete('/:id', controller.deleteOne);

module.exports = router;
