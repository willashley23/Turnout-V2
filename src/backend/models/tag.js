'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: true,
      }
    }
  }, {});
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Event, {through: 'EventTag'});
  };
  return Tag;
};