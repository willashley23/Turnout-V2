"use strict";
const Event = require("../models").Event;
const Tag = require("../models").Tag;
const fallbackImage = "http://res.cloudinary.com/drbaijrqx/image/upload/v1523669582/default_uso7ed.png";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert("Events", [
      { title: "Mega Party 2019", description: "We love to have fun", date: "2018-10-10", location: "San Francisco, CA", imageUrl: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523845716/party1_mqbxti.jpg", createdAt: new Date(), updatedAt: new Date() },
      { title: "The History of Libraries", description: "What is a library? Come find out!", date: new Date(), location: "San Antonio, TX", imageUrl: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523845716/guyinwater_cvydfd.jpg", createdAt: new Date(), updatedAt: new Date() },
      { title: "Mindfullness Seminar @ UCB", description: "We will meditate a lot", date: new Date(), location: "Berkeley, CA", imageUrl: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523845716/cinco_qfuetz.jpg", createdAt: new Date(), updatedAt: new Date() },
      { title: "4/20 At Dolores Park", description: "You, me, and Mary Jane", date: new Date(), location: "San Francisco", imageUrl: "http://res.cloudinary.com/drbaijrqx/image/upload/v1523845716/beerfest_k0atnd.jpg", createdAt: new Date(), updatedAt: new Date() },
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
      { EventId: events[2].id, TagId: tags[9].id, createdAt: new Date(), updatedAt: new Date() },
    ]);

    return await queryInterface.bulkInsert("Tickets", [
      { price: 0, title: "Free", quantity: 30, EventId: events[2].id, createdAt: new Date(), updatedAt: new Date() },
      { price: 5, title: "Basic", quantity: 30, EventId: events[3].id, createdAt: new Date(), updatedAt: new Date() },
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
