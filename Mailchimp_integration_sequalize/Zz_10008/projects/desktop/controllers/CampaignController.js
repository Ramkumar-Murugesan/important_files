var service = require("../services/CampaignService")
var mail_config = require("../config/mail_config")
var mailchimp_service = require("../services/mailchimp_service");
var campaign_localservice = require("../services/Campaign_localservice");

//GET ALl Template
module.exports.get_all_campaigns = function (req, res) {
mailchimp_service.search_key_for_update(req.userid,function(key){
  if(key == undefined){
    campaign_localservice.get_all_campaign(function(campaign){
      res.json(campaign)
    })
  }else{
    service.get_all_campaigns(function (campaign) {
      res.json(campaign);
    });
  }
});
  
}

//POST Campaign
module.exports.create_Campaign = function (req, res) {
  var Campaign = req.body;
  mailchimp_service.search_key_for_update(req.userid,function(key){
    if(key == undefined){
      campaign_localservice.create_campaign(Campaign,function(campaign){
        res.status(201);
        res.json(campaign);
      })
    }else{
      service.create_Campaign(Campaign, function (campaign) {
        res.status(201);
        res.json(campaign);
      });
    }
  });
    
  
}

///campaigns/{campaign_id}/actions/send
module.exports.send_Campaign = function (req, res) {
  var campaign_id = req.params.id;
  mailchimp_service.search_key_for_update(req.userid,function(key){
    if(key == undefined){
    campaign_localservice.search_campaign_for_update(campaign_id,function(campaign){
      res.status(201);
      res.json(campaign);
    })
  }
  else{
  service.send_Campaign(campaign_id, function (campaign) {
    res.status(201);
    res.json(campaign);
  });
}
});
}
//get_campaign_content

//GET Add campaign Content
module.exports.get_campaign_content = function(req, res) {

  var campaign_id = req.params.id;
  mailchimp_service.search_key_for_update(req.body.userid , function(key){
    if(key == undefined || err){
      campaign_localservice.search_campaign_for_update(campaign_id,function(campaign){
        res.status(200);
        res.json(campaign);
       
      })
    }
    else{
      service.get_campaign_content(campaign_id,function (campaignContent){
        res.json(campaignContent);
      });
    
    }
  })
}

//GET Add campaign By ID
module.exports.get_campaign_By_Id = function(req, res) {
  var campaign_id = req.params.id;
  mailchimp_service.search_key_for_update(req.userid,function(key){
    if(key == undefined){
      campaign_localservice.search_campaign_for_update(campaign_id,function(campaign){
        res.status(201);
        res.json(campaign);
      })
    }
    else{
  service.get_campaign_By_Id(campaign_id,function (campaignContent){
    res.json(campaignContent);
  });
}
  });
}
