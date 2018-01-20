var models = require("../models");
var sequelize = models.sequelize;
var propertiesReader = require('properties-reader');
var sqlQuery = propertiesReader(__dirname+'/../sql_queries/Authority_SQL.properties');

module.exports.get_all_Authority = function(callback){
    var get_all_Authority = sqlQuery._properties.get_all_Authority;
    sequelize.query(get_all_Authority,{
        type:sequelize.QueryTypes.SELECT,
        model: models.Authority
    }).then(function(authority){
        callback(authority);
    })
}

module.exports.save_Authority = function(data,callback) {
    var create_query = sqlQuery._properties.save_Authority;
    console.log("$#$#$ the dao data ---->",data)
    sequelize.query(create_query, {
      replacements: {
         name : data.newrole
      },
      type : sequelize.QueryTypes.INSERT,
      model : models.Authority
    }).then(function(authority) {
          callback(authority);
      });
  }

  module.exports.deleteAuthority = function(name,callback){
    var delete_query = sqlQuery._properties.delete_Authority;
    sequelize.query(delete_query, {
      replacements: {
        name: name
      },
      type : sequelize.QueryTypes.DELETE,
    }).then(function() {
      callback();
    });
  }

  module.exports.getAuthority_by_user = function(name,callback){
    var get_query = sqlQuery._properties.getAuthority_by_name;
    sequelize.query(get_query,{
      replacements:{
       name : name
    },
      type : sequelize.QueryTypes.SELECT,
      model : models.Authority
    }).then(function(authority) {
      callback(authority);
    })
  }













