const express = require('express');
const helmet = require('helmet');
const { initRoutes } = require('../routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());

initRoutes(app);

(async () => {
  try {
    // eslint-disable-next-line no-console
    const server = app.listen(3000, () => console.log('Server is running'));
    process.once('SIGINT', () => server.close());
    process.once('SIGTERM', () => server.close());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
})();
