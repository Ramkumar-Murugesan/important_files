var service = require("../services/ListsService");
var mailchimp_service = require("../services/mailchimp_service");
var list_localservice = require("../services/List_localservice");
//GET Members By List ID
module.exports.get_all_list_Member = function(req, res) {
  var list_id = req.params.id;
 mailchimp_service.search_key_for_update(req.body.userid ,function(err,key){
   if(key == undefined || err){

    list_localservice.search_list_for_update(list_id , function(member){
      res.json(member);
    })
   }
   else{

    service.get_all_list_Member(list_id,function (member){
      res.json(member);
    });
   }
 })
  
}
//GET Get All List
module.exports.get_all_Lists = function(req, res) {
  mailchimp_service.search_key_for_update(req.userid,function(err,key){
    if(key == undefined || err){

      list_localservice.get_all_list(function(lists){
        res.json(lists);
      })
    }
    else{

      service.get_all_Lists(function (lists){
        res.json(lists);
      });
    }
  })
    
}
//POST Create List
module.exports.create_List = function(req, res) {
  var list = req.body;
  mailchimp_service.search_key_for_update(req.userid,function(key){
if(key == undefined){
  list_localservice.create_list(list.userid,function(list){
   res.status(list);
   res.json(list);
  });
}
  else{
  service.create_List(list,function (listdata){
    res.status(201);
    res.json(listdata);
  });
}
});
}

//POST Add member to list
module.exports.add_member_to_list = function(req, res) {
  var list_id = req.params.id;
  var memberdata = req.body;
  mailchimp_service.search_key_for_update(req.body.userid , function(err,key){
    if(key == undefined || err){
    list_localservice.update_list(list_id,memberdata,function(member){
      res.json(member);
    })
    }
    else{
      service.add_member_to_list(list_id,memberdata,function (member){
        res.json(member);
      });    
    }
  })
  
}