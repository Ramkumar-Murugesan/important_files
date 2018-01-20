'use strict';

module.exports = function(sequelize, DataTypes) {
  var Mailchimpkey = sequelize.define("Mailchimpkey", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    userid: DataTypes.INTEGER,
    apikey:DataTypes.INTEGER,
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return Mailchimpkey;
};