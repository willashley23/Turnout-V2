'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Events',
      'title',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    )
    queryInterface.changeColumn(
      'Events',
      'location',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    )
    queryInterface.changeColumn(
      'Events',
      'date',
      {
        type: Sequelize.DATE,
        allowNull: false,
      }
    )
    queryInterface.changeColumn(
      'Events',
      'date',
      {
        type: Sequelize.DATE,
        allowNull: false,
      }
    )
    queryInterface.changeColumn(
      'Events',
      'imageUrl',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523669582/default_uso7ed.png",
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Events',
      'title',
      {
        type: Sequelize.STRING,
      }
    )
    queryInterface.changeColumn(
      'Events',
      'location',
      {
        type: Sequelize.STRING,
      }
    )
    queryInterface.changeColumn(
      'Events',
      'date',
      {
        type: Sequelize.DATE,
      }
    )
    queryInterface.changeColumn(
      'Events',
      'date',
      {
        type: Sequelize.DATE,
      }
    )
    queryInterface.changeColumn(
      'Events',
      'imageUrl',
      {
        type: Sequelize.STRING,
      }
    )
  }
};
