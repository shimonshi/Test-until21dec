const Sequelize = require('sequelize');
const db = require('../index');

const Department = db.define('department', {
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

module.exports = Department;
