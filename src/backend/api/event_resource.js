const Event = require('../models/').Event;
const router = require('express').Router();
const { UnprocessableEntity } = require('../errors');

router.get("/events", async(req, res) => {
  try {
    const events = await Event.findAll();

    if (!events) throw new UnprocessableEntity("no events found");

    res.status(200).send({
      events: events,
    });
    
  } catch (error) {
    res.status(error.statusCode || 500).send({ error: error.message });
  }
});

module.exports = router;