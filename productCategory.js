"use strict";

module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define("productCategory", {
    name: {type: DataTypes.STRING(50), allowNull: false },

  }, {
    paranoid: true,
    version: true,
    tableName: 'product_category',
    classMethods: {
      associate: (models) => {
        ProductCategory.hasMany(ProductCategory, {
          foreignKey: {
            allowNull: false
          }
        });
        ProductCategory.belongsTo(models.productCategory, { useJunctionTable: false })
        ProductCategory.hasMany(models.product, {
          foreignKey: {
            allowNull: false
          }
        });

      }
    }
  });

  return ProductCategory;
};