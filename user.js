"use strict";
let gender =  [
  'MALE',
  'FEMALE'
];
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: {type: DataTypes.STRING},
    mdn: {type: DataTypes.STRING},
    gender: {type: DataTypes.ENUM(gender)},

  }, {
    paranoid: true,
    freezeTableName: true,
    version: true,
    classMethods: {
      associate: (models) => {
        User.hasMany(models.userSso, {
          foreignKey: {
            allowNull: false
          }
        });
        User.hasMany(models.saleGroup, {
          foreignKey: {
            allowNull: false
          }
        });

      },
      add: (userName, userMdn, userGender) =>{
        return User.build({name: userName, mdn: userMdn, gender: userGender});
      },
      gender: () => {
        return gender;
      }
    }
  });

  return User;
};