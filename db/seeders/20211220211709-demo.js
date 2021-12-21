module.exports = {
  up: async (queryInterface) => {
    const [depFirst, depSecond] = await queryInterface.bulkInsert(
      'departments',
      [
        {
          name: 'IT-department',
          info: 'abcdqweqe',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'It-department2',
          info: 'abcdqweqedadadadsad',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ['id'] },
    );
    await queryInterface.bulkInsert(
      'workers',
      [
        {
          firstName: 'alex',
          lastName: 'alexandrov',
          email: 'user1@test.com',
          phoneNumber: '6924242',
          about: 'first user',
          departmentId: depFirst.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'adam',
          lastName: 'adamov',
          email: 'user2@test.com',
          phoneNumber: '1234567',
          about: 'second user',
          departmentId: depSecond.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Firstname3',
          lastName: 'Lastname3',
          email: 'user3@test.com',
          phoneNumber: '12345647',
          about: 'third user',
          departmentId: depSecond.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('workers', null, {});
    await queryInterface.bulkDelete('departments', null, {});
  },
};
