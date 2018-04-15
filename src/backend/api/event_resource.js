const Event = require('../models').Event;
const Ticket = require('../models').Ticket;
const Tag = require('../models').Tag;
const router = require('express').Router();
const { UnprocessableEntity } = require('../errors');

router.get("/events", async(req, res) => {
  try {
    const events = await Event.findAll({
      include: [
        { model: Ticket, as: "tickets" },
        { model: Tag, as: "tags" },
      ] 
    });

    if (!events) throw new UnprocessableEntity("no events found");

    res.status(200).send({
      events: events,
    });
    
  } catch (error) {
    res.status(error.statusCode || 500).send({ error: error.message });
  }
});

module.exports = router;