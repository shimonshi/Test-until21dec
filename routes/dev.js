const express = require('express');
const controller = require('../controllers/dev');

function dev() {
  const router = express.Router();
  router.get('/version', controller.version);
  return router;
}

module.exports = dev;
