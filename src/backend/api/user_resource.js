const User = require('../models/').User;
const router = require('express').Router();

router.get('/users', (req, res) => {
  res.send(200, "You got a user!");
});

module.exports = router;
