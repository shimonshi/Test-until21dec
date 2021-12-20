const express = require('express');
const helmet = require('helmet');
const dev = require('../routes/dev');
const sequelize = require('../db/index');
const Workers = require('../routes/workers');
const Departments = require('../routes/departments');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use('/dev', dev());
app.use('/workers', Workers);
app.use('/department', Departments);

(async () => {
  try {
    await sequelize.sync(
      { force: true },
    );
    const server = app.listen(3000);
    process.once('SIGINT', () => server.close());
    process.once('SIGTERM', () => server.close());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
})();
