var dao = require("../daos/UserDao");
var async = require("async");
var authority_dao = require("../daos/AuthorityDao");
var userAuthority_dao = require("../daos/user_authority_dao");
var asyncLoop = require('node-async-loop');


module.exports.get_all_Users = function(callback) {
  dao.get_all_Users(function(list_of_users) {
    callback(list_of_users);
  });
};

module.exports.save_user_details = function(userdetails , callback){
  authority_dao.getAuthority_by_user(userdetails.role,function(role){
    dao.save_user_details(userdetails,function(user){
      
        if(user != undefined){
          userAuthority_dao.save_userAuthority(user,role[0].id,function(data){
          })
        }
      callback(user);
    })
  
  })
  
}
module.exports.delete_user = function(deleteuser , callback){
 async.forEachOf(
   deleteuser,function(value,key,callback){
    userAuthority_dao.deletebyuserid(value.id,function(deletedvalue){
     
    dao.delete_user(value,function(deleteuser){
      callback(deleteuser);
    })
   })
},function(err){
  if(err){
    callback("cannot delete",err);
  }
  else{
    callback("deleted")
  }
})
}

