const Sequelize = require('sequelize');
const db = require('../index');

const Worker = db.define('worker', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  pNumber: {
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
