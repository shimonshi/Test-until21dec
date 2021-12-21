module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('departments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING,
    info: Sequelize.STRING,
    workerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('departments'),
};
