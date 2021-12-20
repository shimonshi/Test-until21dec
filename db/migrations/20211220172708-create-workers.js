'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.createTable('workers', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   fName: {
    //     type: Sequelize.STRING
    //   },
    //   lName: {
    //     type: Sequelize.STRING
    //   },
    //   email: {
    //     type: Sequelize.STRING
    //   },
    //   about: {
    //     type: Sequelize.STRING
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
    console.log("here")
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('workers');
  }
};