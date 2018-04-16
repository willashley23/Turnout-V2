// load data into process.env
require('dotenv').config()

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./api');
const isProduction = process.env.NODE_ENV === "production";

let app = express();

app.use(cors());
app.use(bodyParser.json());

// init mysql
const connection = mysql.createConnection({
  host: isProduction ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV,
  user: isProduction ? process.env.DB_USER_PROD : process.env.DB_USER_DEV,
  password: isProduction ? process.env.DB_PASS_PROD : process.env.DB_PASS_DEV,
  database: isProduction ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV,
});

connection.connect(error => {
  if (error) console.error(error);
});

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

// sync models to the db
db.sequelize.sync({ force: true })
  .then(() => {
    // ..and start the server
    app.listen(8081, () => {
      console.log('listening to port localhost:8081');
    })
  })