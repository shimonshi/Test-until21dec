require('../index');
const Worker = require('./worker');
const Department = require('./department');

Department.hasMany(Worker, {
  foreignKey: 'id',
  onDelete: 'Cascade',
  onUpdate: 'Cascade',
});
Worker.belongsTo(Department);

module.exports = {
  Worker,
  Department,
};
