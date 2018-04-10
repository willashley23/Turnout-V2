const User = require('../models/user');
const router = require('express').Router();

router.get('/users', (req, res) => {
  res.send(200, "You got a user!");
});

module.exports = router;
