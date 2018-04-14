'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Users',
      'username',
      {
        type: Sequelize.STRING, 
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: {
            args: [4,10],
            msg: "username must be between 4 and 10 characters long"
          }
        },
      }
    )
    queryInterface.changeColumn(
      'Users',
      'password',
      {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: {
            args: [6,32],
            msg: "password must be between 6 and 32 characters long"
          }
        },
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Users', 'username', {
      username: Sequelize.STRING,
    })
    queryInterface.changeColumn('Users', 'password', {
      username: Sequelize.STRING,
    })
  }
};
