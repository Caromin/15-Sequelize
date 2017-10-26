'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burgers;
};
