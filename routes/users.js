const router = require('express').Router();
const controller = require('../controllers/users');

router
  .get('/', controller.getAll);
// function router() {
//   const router = express.Router();
//   router
//     .get('/', controller.getAll)
//     .get('/:id', controller.getOne)
//     .post('/', controller.createOne)
//     .put('/:id', controller.updateOne)
//     .delete('/:id', controller.deleteOne);
//   return router;
// }

module.exports = router;
