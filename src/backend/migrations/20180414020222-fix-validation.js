'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  queryInterface.changeColumn(
    'Events',
    'imageUrl',
    {
      type: Sequelize.STRING,
      defaultValue: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523669582/default_uso7ed.png",
    }
  )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Events',
      'imageUrl',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523669582/default_uso7ed.png",
      }
    )
  }
};
