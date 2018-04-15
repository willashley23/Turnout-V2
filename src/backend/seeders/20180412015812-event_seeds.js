"use strict";
const Event = require("../models").Event;
const Tag = require("../models").Tag;

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("Events", [
      { title: "Mega Party 2019", description: "We love to have fun", date: "2018-10-10", location: "San Francisco, CA", imageUrl: "https://thumbs.dreamstime.com/z/birthday-party-3382261.jpg", createdAt: new Date(), updatedAt: new Date() },
      { title: "A really boring event", description: "Booring!!", date: new Date(), location: "San Antonio, TX", imageUrl: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523669582/default_uso7ed.png", createdAt: new Date(), updatedAt: new Date() },
     ], {}); 

    await queryInterface.bulkInsert("Tags", [
      { tag: "parties", createdAt: new Date(), updatedAt: new Date() }, { tag: "classes", createdAt: new Date(), updatedAt: new Date() }, { tag: "music", createdAt: new Date(), updatedAt: new Date() }, { tag: "outdoors", createdAt: new Date(), updatedAt: new Date() },
      { tag: "concerts", createdAt: new Date(), updatedAt: new Date() }, { tag: "networking", createdAt: new Date(), updatedAt: new Date() }, { tag: "career", createdAt: new Date(), updatedAt: new Date() }, { tag: "workshop", createdAt: new Date(), updatedAt: new Date() },
      { tag: "food", createdAt: new Date(), updatedAt: new Date() }, { tag: "talks", createdAt: new Date(), updatedAt: new Date() }, { tag: "games", createdAt: new Date(), updatedAt: new Date() }, { tag: "pets", createdAt: new Date(), updatedAt: new Date() },
    ]);

    
    const events = await Event.findAll({ attributes: ["id"] });
    const tags = await Tag.findAll({ attributes: ["id"] });
    
    await queryInterface.bulkInsert("EventTag", [
      { EventId: events[0].id, TagId: tags[0].id, createdAt: new Date(), updatedAt: new Date() },
      { EventId: events[0].id, TagId: tags[2].id, createdAt: new Date(), updatedAt: new Date() },
      { EventId: events[1].id, TagId: tags[4].id, createdAt: new Date(), updatedAt: new Date() },
      { EventId: events[1].id, TagId: tags[6].id, createdAt: new Date(), updatedAt: new Date() },
      { EventId: events[1].id, TagId: tags[1].id, createdAt: new Date(), updatedAt: new Date() },
    ]);

    return await queryInterface.bulkInsert("Tickets", [
      { price: 15, title: "Early Bird Discount!", quantity: 30, EventId: events[0].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 25, title: "General Admission", quantity: 50, EventId: events[0].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 50, title: "VIP", quantity: 20, EventId: events[0].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 30, title: "GA", quantity: 150, EventId: events[1].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 60, title: "GA+", quantity: 80, EventId: events[1].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 150, title: "VIP", quantity: 30, EventId: events[1].id, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Events", null, {});
    await queryInterface.bulkDelete("Tickets", null, {});
    await queryInterface.bulkDelete("Tags", null, {});
  }
};
