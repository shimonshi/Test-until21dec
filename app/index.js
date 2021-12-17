const express = require('express');
const helmet = require('helmet');
const dev = require('../routes/dev');

const app = express();

app.use(express.urlencoded({ extends: true }));
app.use(express.json());

app.use(helmet());
app.use('/dev', dev());

try {
  app.listen(3000);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}
