'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'worker',
      [
        {
          id: 1,
          fName: 'alex',
          lName: 'alexandrov',
          email: 'user1@test.com',
          pNumber: '6924242',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          fName: 'adam',
          lName: 'adamov',
          email: 'user2@test.com',
          pNumber: '1234567',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'user3',
          email: 'user3@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'department',
      [
        {
          id: 1,
          name: 'IT-department',
          about: 'abcdqweqe',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'It-department2',
          about: 'abcdqweqedadadadsad',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('worker', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('department', null, bulkDeleteOptions);
  },
};
