const Sequelize = require('sequelize');
const db = require('../index');

const Workers = db.define('workers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  first_Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  about: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Workers;
