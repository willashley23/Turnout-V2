const User = require('../models/user');
const router = require('express').Router();

router.get('/users', (req, res) => {
  //do stuff
  res.send(200, "You got a user!");
});

module.exports = router;

// let userResource = epilogue.resource({
//   model: User,
//   endpoints: ['/users', '/users/:id']
// });

// userResource.create.write.before((req, res, context) => {
//   // Move to user model
//   User.create({
//     username: req.body.username,
//     password: req.body.password,
//   })
//   .then( user => {
//     let signedToken = jwt.sign(
//       { user: user.id },
//       'secret',
//       { expiresIn: 24 * 60 * 60 });
    
//       res.send(200,
//         {'token': signedToken,
//         'userId':  user.id,
//         'username': user.username }
//       );
//       return context.skip();
//     });
// });