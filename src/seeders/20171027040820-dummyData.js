'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    // this bulkInsert is being pointed to the models burgers.js
    return queryInterface.bulkInsert('burgers', [
        {
        burgerName: 'firstBurgerSequelize',
        devoured: true,
      }, {
        burgerName: 'secondBurger',
        devoured: false,
      }
    ], {}
    );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
