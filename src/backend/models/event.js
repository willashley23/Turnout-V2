'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      defaultValue: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523669582/default_uso7ed.png",
    }
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.Ticket, { as: "tickets" });
    Event.hasMany(models.Bookmark, { as: "bookmarks" });
    Event.belongsToMany(models.Tag, { through: 'EventTag', as: "tags" });
    Event.belongsTo(models.User);
  };
  return Event;
};