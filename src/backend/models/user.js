'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: {
          args: [4,10],
          msg: "username must be between 4 and 10 characters long"
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: {
          args: [6,32],
          msg: "password must be between 6 and 32 characters long"
        }
      },
    }
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