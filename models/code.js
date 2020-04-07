'use strict';
module.exports = (sequelize, DataTypes) => {
  const Code = sequelize.define('Code', {
    country: DataTypes.STRING,
    currency: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  Code.associate = function(models) {
    // associations can be defined here
  };
  return Code;
};