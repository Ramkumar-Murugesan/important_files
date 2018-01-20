var service = require("../services/TemplateService")
var mail_config = require("../config/mail_config")
var mailchimp_service = require("../services/mailchimp_service");
var template_localservice = require("../services/Template_localservice");


//GET ALl Template
module.exports.get_all_Template = function (req, res) {
  mailchimp_service.search_key_for_update(req.body.userid , function(err,key){
    if(key == undefined || err){
    template_localservice.get_all_template(function(template){
      res.status(200);
      res.json(template);
    })
    }
  })
  service.get_all_Template(function (template) {
    res.json(template);
  });
}
//GET TEMPLATE BY USER
module.exports.get_all_Template_by_user = function (req, res) {
  mailchimp_service.search_key_for_update(req.body.userid,function(err,key){
    if(key == undefined || err){
      template_localservice.get_all_template(function(template){
        res.json(template);
      })
    }
    else{
      service.get_all_Template_by_user(function (template) {
        res.json(template);
      });
    
    }
  })
}

//GET Template By ID
module.exports.get_Template_by_id = function (req, res) {
  var Template_id = req.params.id;
  mailchimp_service.search_key_for_update(req.body.userid,function(err,key){
    if(key == undefined || err){
      template_localservice.search_template_for_update(Template_id,function(template){
        res.json(template);
      })
    }
    else{
      service.get_Template_by_id(Template_id, function (template) {
        res.json(template);
      });
    
    }
  })
}

module.exports.create_Template = function (req, res) {
console.log("enter inot create template controller------>>>>>>");
  var Template = req.body;
  var userid = 1;
  mailchimp_service.search_key_for_update(userid , function(err,key){
    console.log("entering into create template api key controller");
    if(key == undefined || err){
      template_localservice.create_template(Template , function(template){
        res.status(200);
        res.json(template);
      })
    }
  })
  console.log("entering into create template no key controller")
  service.create_Template(Template, function (template) {
    res.status(201);
    res.json(template);
  });
}

module.exports.edit_Template = function (req, res) {
  var Template = req.body;
  var Template_id = req.params.id;
  mailchimp_service.search_key_for_update(req.body.userid , function(key){
    if(key == undefined || err){
      template_localservice.update_template(Template_id,Template,function(template){
        res.status(200);
        res.json(template);
      })
    }
    else{
        service.edit_Template(Template,Template_id, function (template) {
        res.status(201);
        res.json(template);
      });
    
    }
  })
}