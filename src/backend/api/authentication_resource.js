const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = require('express').Router()

router.post('/login', (req, res) => {
  
  User.findOne({ 
    where: { username: req.body.username } 
  })
    .then( user => {
      if (user) {
        User.verifyPassword(req.body.password, user)
          .then((verified) => {
            if (verified) {
              let signedToken = jwt.sign(
                { user: user.id },
                'secret',
                { expiresIn: 24 * 60 * 60 }
              );

              res.status(200).send({
                token: signedToken,
                userId:  user.id,
                username: user.username 
              });
            } else {
              res.status(500).send({ error: true, });
            }
          })
          .catch((error) => {
            res.status(500).send({ error: error, });
          });
      } else {
        res.status(500).send({ error: true, });
      }
    })
    .catch(error => {
      res.status(500).send({ error: error });
    });
});

router.post('/register', (req, res) => {
  User.create({ 
    username: req.body.username,
    password: req.body.password
   })
    .then( user => {
      let signedToken = jwt.sign(
        { user: user.id },
        'secret',
        { expiresIn: 24 * 60 * 60 });
      
      res.status(200).send({
        token: signedToken,
        userId:  user.id,
        username: user.username 
      });
    });
});

module.exports = router;