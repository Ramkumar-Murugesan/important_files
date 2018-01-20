var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Users_SQL.properties');

module.exports.get_all_Users = function(callback) {
    var get_all_query = sqlQuery._properties.get_all_Users;
    sequelize.query(get_all_query, {
      type : sequelize.QueryTypes.SELECT,
      model: models.Users
    }).then(function(users) {
          callback(users);
      });
  }

  module.exports.save_user_details = function(userdetails , callback){
    console.log("userdetails in dao--->>>",userdetails)
    var saveuser_query = sqlQuery._properties.save_user_details;
    sequelize.query(saveuser_query,{
      replacements: {
        firstname : userdetails.firstname,
        lastname : userdetails.lastname,
        password : userdetails.password,
        username : userdetails.username
      },
     type:sequelize.QueryTypes.INSERT,
     model: models.Users
    }).then(function(user){
      callback(user);
    })
  }

  

  module.exports.delete_user = function(deleteuser , callback){
    console.log("delete user in dao",deleteuser)
    var deleteuser_query = sqlQuery._properties.delete_user;
    sequelize.query(deleteuser_query,{
      replacements:{
        id: deleteuser.id
      },
      type: sequelize.QueryTypes.DELETE,
      model:models.Users
    }).then(function(err,deleteuser){
      if(err){
        callback("cannot deleted")
        
      }
      else{
        callback("deleted")
      }
    })
  }
