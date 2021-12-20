require('../index');
const Workers = require('./worker');
const Departments = require('./department');

Departments.hasMany(Workers, {
  foreignKey: 'id',
  onDelete: 'Cascade',
  onUpdate: 'Cascade',
});

Workers.belongsToMany(Departments);

Workers.hasOne(Departments, {
  foreignKey: 'id',
});
Workers.belongsTo(Departments);

module.exports = Workers;
module.exports = Departments;
