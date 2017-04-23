"use strict";

module.exports = (sequelize, DataTypes) => {
  const SaleGroup = sequelize.define("saleGroup", {
    userComment: {type: DataTypes.STRING},
  }, {
    paranoid: true,
    freezeTableName: true,
    version: true,
    tableName: 'sale_group',
    classMethods: {
      associate: (models) => {
        SaleGroup.hasMany(models.sale, {
          foreignKey: {
            allowNull: false
          }
        });
        SaleGroup.belongsTo(models.user, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return SaleGroup;
};