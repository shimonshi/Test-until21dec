const express = require('express');
const helmet = require('helmet');
const dev = require('../routes/dev');
const sequelize = require('../db/index');
const User = require('../db/models/users');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use('/dev', dev());
app.use('/users', require('../routes/users'));

(async () => {
  try {
    await sequelize.sync(
      { force: false },
    );
    const server = app.listen(3000);
    process.once('SIGINT', () => server.close());
    process.once('SIGTERM', () => server.close());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
})();
