const Sequelize = require('sequelize');
const db = require('../index');

const Worker = db.define('worker', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
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
  departmentId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Worker;
