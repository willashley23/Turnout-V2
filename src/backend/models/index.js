const Sequelize = require('sequelize')
const epilogue = require('epilogue')

// Create db instance
let database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite'
});

// Resets the database and launches the express app on :8081
database
  .sync({ force: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081');
    })
  });

module.exports = database;