var service = require("../services/TemplateService")
var template_localservice = require("../services/Template_localservice")
var campaign_template_localservice = require("../services/Campaign_template_localservice")

//GET ALl Template
module.exports.get_all_Template = function (req, res) {
  console.log("get alls template")
  if (req.headers.api_key && req.headers.api_url) {
    service.get_all_Template(req.headers.api_key, req.headers.api_url, function (template) {
      res.json(template);
    });
  }
  else {
    template_localservice.findall_template(function (template) {
      res.status(201)
      res.json(template);

    })
  }
}
//GET TEMPLATE BY USER
module.exports.get_all_Template_by_user = function (req, res) {
  if (req.headers.api_key && req.headers.api_url) {
    service.get_all_Template_by_user(req.headers.api_key, req.headers.api_url, function (template) {
      res.json(template);
    });
  }
}

//GET Template By ID
module.exports.get_Template_by_id = function (req, res) {

  var Template_id = req.params.id;
  if (req.headers.api_key && req.headers.api_url) {
    service.get_Template_by_id(Template_id, req.headers.api_key, req.headers.api_url, function (template) {
      res.json(template);
    });
  }
  else {
    template_localservice.findbytemplateid(Template_id, function (template) {
      res.status(201);
      res.json(template);
    })
  }
}

module.exports.create_Template = function (req, res) {
  var Template = req.body;
  if (req.headers.api_key && req.headers.api_url) {
    service.create_Template(Template, req.headers.api_key, req.headers.api_url, function (template) {
      res.status(201);
      res.json(template);
    });
  }
  else {
    template_localservice.create_template(Template, function (template) {
      res.status(201);
      res.json(template);
    })
  }
}

module.exports.edit_Template = function (req, res) {

  var Template = req.body;
  var Template_id = req.params.id;
  if (req.headers.api_key && req.headers.api_url) {
    service.edit_Template(Template, Template_id, req.headers.api_key, req.headers.api_url, function (template) {
      res.status(201);
      res.json(template);
    });
  }
  else {
    campaign_template_localservice.create_campaign_template(Template_id, Template, function (template) {
      res.status(201);
      res.json(template);
    })
  }
}