'use strict';
//const Event = require('./event');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Event, {as: "events"});
    User.hasMany(models.Ticket, {as: "tickets"});
    User.hasMany(models.Bookmark, {as: "bookmarks"});
  };
  return User;
};