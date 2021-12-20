const Sequelize = require('sequelize');
const db = require('../index');

const Departments = db.define('departments', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  info: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Departments;
