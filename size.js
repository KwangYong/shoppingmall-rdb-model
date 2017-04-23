"use strict";

module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define("size", {
    name: {type: DataTypes.STRING(10), allowNull: false},
  }, {
    paranoid: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: (models) => {
        Size.hasMany(models.productSkuColorSize, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Size;
};