'use strict';
const Event = require("../models").Event;

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Events', [
      { title: 'Mega Party 2019', description: 'We love to have fun', date: '2018-10-10', location: "San Francisco, CA", imageUrl: "https://thumbs.dreamstime.com/z/birthday-party-3382261.jpg", createdAt: new Date(), updatedAt: new Date() },
      { title: 'A really boring event', description: 'Booring!!', date: new Date(), location: "San Antonio, TX", imageUrl: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523669582/default_uso7ed.png", createdAt: new Date(), updatedAt: new Date() },
     ], {}); 

    const events = await Event.findAll({ attributes: ["id"] });

    return await queryInterface.bulkInsert('Tickets', [
      { price: 15, title: "Early Bird Discount!", quantity: 30, EventId: events[0].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 25, title: "General Admission", quantity: 50, EventId: events[0].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 50, title: "VIP", quantity: 20, EventId: events[0].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 30, title: "GA", quantity: 150, EventId: events[1].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 60, title: "GA+", quantity: 80, EventId: events[1].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 150, title: "VIP", quantity: 30, EventId: events[1].id, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
