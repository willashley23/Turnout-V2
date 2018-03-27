const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')
const ForbiddenError = require('epilogue').Errors.ForbiddenError;
const jwt = require('jsonwebtoken');
require('./api/authentication_resource.js')(app);


let app = express();
app.use(cors());
app.use(bodyParser.json());

// verify authorization header middleware
app.use((req, res, next) => {
  // require every request to have an authorization header
  if (!req.headers.authorization) {
    return next(new Error('Authorization header is required'))
  }
  next();
});