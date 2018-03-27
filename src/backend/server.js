const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./api');
const db = require('./models');

let app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect all our routes to our application
app.use('/', routes);

// verify authorization header middleware
app.use((req, res, next) => {
  // require every request to have an authorization header
  if (!req.headers.authorization) {
    return next(new Error('Authorization header is required'))
  }
  next();
});

db.init(app);