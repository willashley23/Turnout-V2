const Sequelize = require('sequelize');

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
        require('../seeders/seed_events')();
      })
    });
}

module.exports = db;