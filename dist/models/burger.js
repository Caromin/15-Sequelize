'use strict';

module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define('Burgers', {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};