/* eslint-disable arrow-body-style */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addConstraint('Worker', {
      fields: ['departmentId'],
      type: 'foreign key',
      name: 'worker_department_assoc',
      references: {
        table: 'department',
        field: 'id',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.addConstraint('Worker', {
      fields: ['departmentId'],
      type: 'foreign key',
      name: 'worker_department_assoc',
      references: {
        table: 'department',
        field: 'id',
      },
    });
  },
};
