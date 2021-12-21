const Workers = require('./workers');
const Departments = require('./department');

const initRoutes = (app) => {
  app.use('/workers', Workers);
  app.use('/department', Departments);
};

module.exports = { initRoutes };
