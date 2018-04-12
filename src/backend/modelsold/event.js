const Sequelize = require('sequelize');
const database = require('./index.js');

const Event = database.define('events', {
  title: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  date: { type: Sequelize.DATE },
  location: { type: Sequelize.STRING },
  imageUrl: { type: Sequelize.STRING },
});

Event.sync();

module.exports = Event;