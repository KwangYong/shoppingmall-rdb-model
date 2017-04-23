"use strict";

let currentStatus = [
  'PAID_DONE', // 결제 완료
  'PAID_CANCEL', // 결제 취소
  'SHIPPING_READY', // 배송 준비중
  'SHIPPING_ONGOING', //배송 배송중
  'SHIPPING_DONE', //배송 배송완료
  'REFUND_REQ', // 환불 요청
  'REFUND_ING', // 환불 진행중
  'EXCHANGE_REQ', // 교환 요청
  'EXCHANGE_ING', // 교환 진행중
  'SALE_DONE' //구매완료
];
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", {
    currentStatus: {type: DataTypes.ENUM(currentStatus), allowNull: false,
      set : function(val) {
        this.setDataValue('currentStatus', val);
      }},
  }, {
    paranoid: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: (models)  => {
        Sale.belongsTo(models.saleGroup, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });
        Sale.belongsTo(models.productSkuColorSize, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });
      },
      currentStatus: () => {
       return currentStatus;
      }
    }
  });

  return Sale;
};