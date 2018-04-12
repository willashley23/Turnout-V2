'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
    price: DataTypes.INTEGER,
    title: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  Ticket.associate = function(models) {
    Ticket.belongsTo(models.Event);
    Ticket.belongsTo(models.User);
  };
  return Ticket;
};