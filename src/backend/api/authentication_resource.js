const User = require('../models/user');
const jwt = require('jsonwebtoken');
//some crypto import

const authenticationResource = app => {

  app.get('/login', (req, res) => {
    User.findOne({ 
      where: { username: req.body.username } 
    })
      .then( user => {
        // check pw hash polyfill for now
        if (user.password === req.body.password) {
          let signedToken = jwt.sign(
            { user: user.id },
            'secret',
            { expiresIn: 24 * 60 * 60 }
          );
          
          res.send(200, {
            token: signedToken,
            userId:  user.id,
            username: user.username 
          });
        } else {
          res.send(401, {
            error: true,
          });
        }
      });
  });

  app.post('/register', (req, res) => {
      
  });
}

module.exports = authenticationResource;