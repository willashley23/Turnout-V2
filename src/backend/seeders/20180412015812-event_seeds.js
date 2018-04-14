'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
     { title: 'Mega Party 2019', description: 'We love to have fun', date: '2018-10-10', location: "San Francisco, CA", imageUrl: "https://thumbs.dreamstime.com/z/birthday-party-3382261.jpg", createdAt: new Date(), updatedAt: new Date() },
     { title: 'A really boring event', description: 'Booring!!', date: new Date(), location: "San Antonio, TX", imageUrl: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523669582/default_uso7ed.png", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
