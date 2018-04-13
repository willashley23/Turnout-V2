'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.setPassword = (password, cb) => {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return cb(err);
      bcrypt.hash(password, salt, function(error, hash) {
        return cb(error, hash);
      });
    });
  }
  
  User.verifyPassword = (password, user) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, function(err, res) {
        if (err) reject(err);
        resolve(res);
      });
    });
  }
  
  User.beforeCreate( user => {
    return new Promise((resolve, reject) => {
      User.setPassword(user.password, (err, hash) => {
        if (err) reject(err);
        user.password = hash;
        resolve(user);
      });
    });
  });
  
  User.associate = function(models) {
    User.hasMany(models.Event, {as: "events"});
    User.hasMany(models.Ticket, {as: "tickets"});
    User.hasMany(models.Bookmark, {as: "bookmarks"});
  };
  return User;
};