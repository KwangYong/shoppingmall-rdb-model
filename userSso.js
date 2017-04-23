"use strict";

const passwordHash = require('password-hash');
let authType = [
  'FACEBOOK',
  'GOOGLE',
  'LOGIN_ID',
];
module.exports = (sequelize, DataTypes) => {
  const UserSso = sequelize.define("userSso", {
    type: { type: DataTypes.ENUM(authType), allowNull: false },
    token: { type: DataTypes.STRING },
    secret: { type: DataTypes.STRING },
  }, {
    paranoid: true,
    freezeTableName: true,
    tableName: 'user_sso',
    version: true,
    classMethods: {
      associate: (models) => {
        UserSso.belongsTo(models.user, {
          onDelete: "NO ACTION",
          foreignKey: {
            allowNull: false
          }
        });
      },
      add: (userId, authType, authToken, authSecret) => {
        if(authType == 'LOGIN_ID'){
          authSecret = passwordHash.generate(authSecret);
        }
        return UserSso.build({userId: userId, type: authType, token: authToken, secret: authSecret});
      },
      authType:() => {
        return authType;
      }
    }
  });

  return UserSso;
};