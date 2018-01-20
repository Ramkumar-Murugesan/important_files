var service = require("../services/CampaignService")
var template_localservice = require("../services/Template_localservice")
var campaign_localservices = require("../services/Campaign_localservice");
var campaign_template_services = require("../services/Campaign_template_localservice");
var template_edit_for_campaign = require("../services/TemplateService");
var mailingdetails_dao = require("../daos/MailingDetailsDao")
//GET ALl Template
module.exports.get_all_campaigns = function (req, res) {
  //  console.log("getting all campaign in controller")
  if (req.headers.api_key && req.headers.api_url) {
    service.get_all_campaigns(req.headers.api_key, req.headers.api_url, function (campaign) {
      res.json(campaign);
    });
  }
  else {
    campaign_localservices.get_all_Campaign(function (campaign) {
      res.status(200)
      res.json(campaign);
    })
  }
}

//POST Campaign
module.exports.create_Campaign = function (req, res) {
  var Campaign = req.body;
  if (req.headers.api_key && req.headers.api_url) {
    // var Campaign = req.body;
    service.create_Campaign(Campaign, req.headers.api_key, req.headers.api_url, function (campaign) {
      res.status(201);
      res.json(campaign);
    });
  }
  else {
    campaign_localservices.create_Campaign(Campaign, function (data) {
      res.status(200);
      res.json(data);

    });


  }

}
///campaigns/{campaign_id}/actions/send
module.exports.send_Campaign = function (req, res) {
  var campaign_id = req.params.id;
  var userid = req.params.userid;
  console.log("userid to send campaign id---", userid)
  if (req.headers.api_key && req.headers.api_url) {
    console.log("campaign_id - > ", campaign_id);
    service.send_Campaign(campaign_id, req.headers.api_key, req.headers.api_url, function (campaign) {
      res.status(201);
      res.json(campaign);
    });
  }
  else {
    mailingdetails_dao.findbyuserid(userid, function (userdetails) {
      if (userdetails.length > 0) {
        campaign_localservices.send_campaign(campaign_id, userid, function (campaign) {
          res.status(201);
          res.json("Mail Sent..!!");
        })
      } else {
        console.log("No Reciver found or stmp details not yet added")
        res.status(400);
        res.json("No Reciver found or stmp details not yet added");
      }

    })
  }
}
//get_campaign_content

//GET Add campaign Content
module.exports.get_campaign_content = function (req, res) {
  var campaign_id = req.params.id;

  if (req.headers.api_key && req.headers.api_url) {
    // var campaign_id = req.params.id;
    service.get_campaign_content(campaign_id, req.headers.api_key, req.headers.api_url, function (campaignContent) {
      res.status(201);
      res.json(campaignContent);
    });
  }
  else {
    campaign_localservices.get_Campaign_content(campaign_id, function (campaign) {
      res.status(201);
      res.json(campaign);
    })
  }
}

//GET Add campaign By ID
module.exports.get_campaign_By_Id = function (req, res) {
  var campaign_id = req.params.id;
  if (req.headers.api_key && req.headers.api_url) {
    var campaign_id = req.params.id;
    service.get_campaign_By_Id(campaign_id, req.headers.api_key, req.headers.api_url, function (campaignContent) {
      res.json(campaignContent);
    });
  }
  else {
    campaign_localservices.search_Campaign_for_update(campaign_id, function (campaignContent) {
      res.json(campaignContent);
    })
  }
}

//PUT Edit campaign Content
module.exports.put_campaign_content = function (req, res) {
  if (req.headers.api_key && req.headers.api_url) {
    var Campaign = req.body;
    var campaign = req.params.id;
    service.put_campaign_content(Campaign, req.headers.api_key, req.headers.api_url, campaign, function (campaignContent) {
      res.json(campaignContent);
    });
  }
  else {
    campaign_localservices.update_Campaign(campaign, Campaign, function (campaignContent) {
      res.status(201);
      res.json(campaignContent);
    })
  }
}

module.exports.edit_Camp_Template = function (req, res) {
  var Template_id = req.params.id;
  var Template = req.body;

  if (req.headers.api_key && req.headers.api_url) {
    service.edit_Template(Template, Template_id, req.headers.api_key, req.headers.api_url, function (template) {
      res.status(201);
      res.json(template);
    });
  }
  else {
    campaign_template_services.create_campaign_template(Template_id, Template, function (template) {
      res.status(201);
      res.json({ template });
    })
  }
}