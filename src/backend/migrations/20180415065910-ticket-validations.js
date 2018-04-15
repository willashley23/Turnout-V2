'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Tickets',
      'price',
      {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          max: 10000,
          min: 0,
        }
      }
    )
    queryInterface.changeColumn(
      'Tickets',
      'title',
      {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1,100],
        },
      }
    )
    queryInterface.changeColumn(
      'Tickets',
      'quantity',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Tickets',
      'price',
      {
        type: Sequelize.INTEGER,
      }
    )
    queryInterface.changeColumn(
      'Tickets',
      'title',
      {
        type: Sequelize.STRING,
      }
    )
    queryInterface.changeColumn(
      'Tickets',
      'quantity',
      {
        type: Sequelize.INTEGER,
      }
    )
  }
};
