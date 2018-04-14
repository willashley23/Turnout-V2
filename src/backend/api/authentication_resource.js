const User = require('../models/').User;
const jwt = require('jsonwebtoken');
const router = require('express').Router()
const { UnprocessableEntity, BadRequest } = require('../errors');

router.post('/login', async(req, res) => {

  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    
    if (!user) throw new UnprocessableEntity('Invalid username'); 

    const verified = await User.verifyPassword(req.body.password, user);

    if (!verified) throw new UnprocessableEntity('Invalid password');

    let signedToken = jwt.sign(
      { user: user.id },
      'secret', 
      { expiresIn: 24 * 60 * 60 }
    );

    res.status(200).send({
      token: signedToken,
      userId: user.id,
      username: user.username
    });
  } catch (error) {
    res.status(error.statusCode || 500).send({ error: error.message });
  }
});
  
router.post('/register', async(req, res) => {
  
  try {
    const knownUser = await User.findOne({ where: { username: req.body.username } });

    if (knownUser) throw new UnprocessableEntity("username taken");

    const user = await User.create({ 
      username: req.body.username,
      password: req.body.password
     });

    let signedToken = jwt.sign(
    { user: user.id },
    'secret',
    { expiresIn: 24 * 60 * 60 });

    res.status(200).send({
      token: signedToken,
      userId:  user.id,
      username: user.username 
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

module.exports = router;