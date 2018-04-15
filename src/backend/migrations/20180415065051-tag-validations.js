'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Tags',
      'tag',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlpha: true,
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Tags',
      'tag',
      {
        type: Sequelize.STRING,
      }
    )
  }
};
