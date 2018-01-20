var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require("properties-reader");
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/user_authority_SQL.properties');

module.exports.save_userAuthority = function(user_id,authority_id , callback){
    console.log("#@#@#user_asdfsdf--->>><><>",user_id,authority_id)
    var save_query = sqlQuery._properties.save_userAuthority;
    sequelize.query(save_query,{
        replacements:{
            user_id:user_id,
            authority_id : authority_id
        },
        type: sequelize.QueryTypes.INSERT,
        model:models.user_authority
    }).then(function(userauthority){
        callback(userauthority);
    })
}

module.exports.deletebyuserid = function(user_id,callback){
    console.log("delete user authority alues are",user_id);
    var deletebyuserid_query = sqlQuery._properties.deletebyuserid;
    sequelize.query(deletebyuserid_query,{
        replacements:{
            user_id : user_id
        },
        type:sequelize.QueryTypes.DELETE,
        model:models.user_authority
    }).then(function(err,delete_userauthority){
       if(err){
           callback("cannot delete ")
       }
       else{
        callback("deleted")
       }
    })
}
