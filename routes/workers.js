const router = require('express').Router();
const controller = require('../controllers/worker');
const getWorkerValidation = require('./validate/validation');

router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .post('/', getWorkerValidation, controller.createOne)
  .put('/:id', getWorkerValidation, controller.updateOne)
  .delete('/:id', controller.deleteOne);

module.exports = router;
