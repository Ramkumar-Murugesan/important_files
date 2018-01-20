var service = require("../services/UserService")

module.exports.get_all_Users = function(req, res) {

  service.get_all_Users(function (list_of_users){
    res.json(list_of_users);
  });

}

module.exports.save_user_details = function(req,res){
  var userdetails = req.body;
  service.save_user_details(userdetails,function(user){
    res.status(201);
    res.json(user);
  })
}
module.exports.delete_user = function(req,res){
  var deleteuser = req.body;
  service.delete_user(deleteuser , function(deleteuser){
    res.status(201);
    res.json(deleteuser);
  })
}

