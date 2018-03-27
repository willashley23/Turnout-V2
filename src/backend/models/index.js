const Sequelize = require('sequelize');
const app = require("../server");

// Create db instance
let db = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite'
});

// Resets the database and launches the express app on :8081
db.init = app => {
  db
    .sync({ force: true })
    .then(() => {
      app.listen(8081, () => {
        console.log('listening to port localhost:8081');
      })
    });
}

module.exports = db;