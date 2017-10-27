'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    // this bulkInsert is being pointed to the name of the table in burgers.js
    //for cleardb it was lowercase, but mariadb it was uppercase
    return queryInterface.bulkInsert('Burgers', [{
      burgerName: 'firstBurgerSequelize',
      devoured: true
    }, {
      burgerName: 'secondBurger',
      devoured: false
    }], {});
  },

  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};