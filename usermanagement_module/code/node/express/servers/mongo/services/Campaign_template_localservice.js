
//mongoose
var campaign_template_dao = require('../daos/Campaign_template_dao');
var campaign_dao = require("../daos/Campaign_dao")
module.exports.create_campaign_template = function(campaign_id,campaign_template , callback){
    
    campaign_template_dao.create_campaign_template(campaign_id,campaign_template , function(campaign_template){
        var id = campaign_template._id;
        campaign_template.id = id;
        if(campaign_template){
        var templatedata = {templates : campaign_template}
       var campaign = {} 
        campaign.edited_template = id;
        campaign.status = 'saved';
        campaign_dao.update_Campaign(campaign_template.campaign_id,campaign,function(campaignUpdated){
            if(campaignUpdated){
            }
        })
        callback(templatedata);
    }
    })
}