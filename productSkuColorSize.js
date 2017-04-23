"use strict";

module.exports = (sequelize, DataTypes) => {
  const ProductSkuColorSize = sequelize.define("productSkuColorSize", {
    name: {type: DataTypes.STRING(50), allowNull: false },
  }, {
    paranoid: true,
    version: true,
    tableName: 'product_sku_color_size',
    classMethods: {
      associate: (models) => {
        ProductSkuColorSize.hasMany(models.sale);

        ProductSkuColorSize.belongsTo(models.product, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });

        ProductSkuColorSize.belongsTo(models.size, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });

        ProductSkuColorSize.belongsTo(models.color, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return ProductSkuColorSize;
};