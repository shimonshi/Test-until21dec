const router = require('express').Router();
const controller = require('../controllers/workers');
const getUserValidate = require('./validate/validation');

router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .post('/', getUserValidate, controller.createOne)
  .put('/:id', getUserValidate, controller.updateOne)
  .delete('/:id', controller.deleteOne);

module.exports = router;
