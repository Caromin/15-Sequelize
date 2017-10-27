'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    //table name should be pluralized and same as model variable
    // else errors will error and point to routes 
    return queryInterface.createTable('Burgers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      burgerName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Burgers');
  }
};