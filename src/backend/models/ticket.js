'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
    price: { 
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        max: 10000,
        min: 0,
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100],
      },
    },
    quantity: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
  }, {});
  Ticket.associate = function(models) {
    Ticket.belongsTo(models.Event);
    Ticket.belongsToMany(models.User, { through: 'UserTicket' });
  };
  return Ticket;
};