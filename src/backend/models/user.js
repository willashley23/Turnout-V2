const Sequelize = require('sequelize');
const database = require('./index.js');
const bcrypt = require('bcrypt');

const User = database.define('users', {
  username: {
    type: Sequelize.STRING, 
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

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

User.beforeCreate( (user) => {
  return new Promise((resolve, reject) => {
    User.setPassword(user.password, (err, hash) => {
      if (err) reject(err);
      user.password = hash;
      resolve(user);
    });
  });
});

module.exports = User;