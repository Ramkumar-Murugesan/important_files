//mongoose
var list_dao = require("../daos/List_dao")
var dao = require("../daos/member_dao")
module.exports.create_member = function(member,callback) {
  console.log("create data in services----",member)
  dao.create_member(member,function (member){
    var id = member._id;
    member.id = id; 
    callback(member);
  });
} 
module.exports.get_all_list_member = function(member_id,callback) {
  dao.get_all_member(member_id,function (member){
    var id = member._id;
    member.id = id;
    callback(member)
  });
} 
module.exports.get_all_member = function(callback) {
  dao.get_all_member(function (list_of_member){
    var count = 0;
     for(var i = 0; i<list_of_member.length; i++){
     var id = list_of_member[i]._id; 
     list_of_member[i].id = id;
     count ++;
     }
     if(list_of_member.length === count){
    
      callback(list_of_member)
  }
  });
}