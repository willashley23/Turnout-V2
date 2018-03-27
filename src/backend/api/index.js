const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const basename  = path.basename(__filename);

// attach each controller in this directory to one router and export it.
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    router.use(require(`./${file}`));
  });

module.exports = router;
