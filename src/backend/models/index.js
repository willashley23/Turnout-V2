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
        const Event = require("./event");
        Event.create({
          title: "A demo event",
          description: "Lots of fun here.",
        })
      })
    });
}

module.exports = db;