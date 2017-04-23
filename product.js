"use strict";

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    name: {type: DataTypes.STRING(50), allowNull: false},
    description: { type: DataTypes.TEXT, allowNull: false},
    regularPrice: { type: DataTypes.BIGINT, allowNull: false },
    discountPrice: { type: DataTypes.BIGINT, allowNull: false },

  }, {
    paranoid: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: (models) => {
        Product.hasMany(models.productSkuColorSize, {
          foreignKey: {
            allowNull: false
          }
        });
        Product.belongsTo(models.productCategory);

      }
    }
  });

  return Product;
};