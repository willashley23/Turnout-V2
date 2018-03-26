const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')
const ForbiddenError = require('epilogue').Errors.ForbiddenError;

let app = express()
app.use(cors())
app.use(bodyParser.json())

// verify authorization header middleware
app.use((req, res, next) => {
  // require every request to have an authorization header
  if (!req.headers.authorization) {
    return next(new Error('Authorization header is required'))
  }
  next();
})

// For ease of this tutorial, we are going to use SQLite to limit dependencies
let database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite'
})

// Define our Post model
// id, createdAt, and updatedAt are added by sequelize automatically
let User = database.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
})

// Initialize epilogue
epilogue.initialize({
  app: app,
  sequelize: database
})

// Create the dynamic REST resource for our Post model
let userResource = epilogue.resource({
  model: User,
  endpoints: ['/users', '/users/:id']
})

userResource.list.write(function(req, res, context) {
  // Move to user model
  User.create({
    username: req.username,
    password: req.password,
  })
  context.continue();
})

// Resets the database and launches the express app on :8081
database
  .sync({ force: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081')
    })
  })