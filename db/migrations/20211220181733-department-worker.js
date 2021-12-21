module.exports = {
  up: (queryInterface) => queryInterface.addConstraint('workers', {
    fields: ['departmentId'],
    type: 'foreign key',
    name: 'worker_department_assoc',
    references: {
      table: 'departments',
      field: 'id',
    },
  }),

  down: (queryInterface) => queryInterface.removeConstraint('workers', 'worker_department_assoc'),
};
