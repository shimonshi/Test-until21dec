const fs = require('fs');

console.log(process.env.NODE_ENV);

module.exports = {
  development: {
    username: 'test',
    password: '123',
    database: 'test',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'postgres',
  },
};
