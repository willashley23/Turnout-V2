'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    imageUrl: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.Ticket);
    Event.hasMany(models.Bookmark);
    Event.belongsToMany(models.Tag, {through: 'EventTag'});
    Event.belongsTo(models.User);
  };
  return Event;
};