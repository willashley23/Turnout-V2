const Sequelize = require('sequelize');
const database = require('./index.js');

const User = database.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;