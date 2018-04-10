const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = require('express').Router()

router.post('/login', async(req, res) => {

  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    
    if (!user) throw UnprocessableEntity('Invalid username'); 

    const verified = await User.verifyPassword(req.body.password, user);

    if (!verified) throw UnprocessableEntity('Invalid password');

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
    res.status(error.statusCode || 500).send({ error: error.message });
  }
});

module.exports = router;