'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bookmark = sequelize.define('Bookmark', {}, {});
  Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.User);
    Bookmark.belongsTo(models.Event);
  };
  return Bookmark;
};