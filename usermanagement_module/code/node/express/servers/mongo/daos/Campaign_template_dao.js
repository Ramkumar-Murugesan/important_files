var campaign_template_schema = require("../models/Campaign_template")

module.exports.create_campaign_template = function(campaign_id , campaign_template,callback) {
    var templatevalues = {};
    templatevalues.campaign_id = campaign_id;
    templatevalues.edited_html = campaign_template.template.html;
var campaign_template_data = new campaign_template_schema(templatevalues)
  campaign_template_data.save( function(error,campaign_template) {
    if (error) {
      callback(error);
    } else {
      callback(campaign_template);
    }
  });
} 

module.exports.findtemplatebycampaignid = function(campaign_id,callback) {
   campaign_template_schema.find({ campaign_id: campaign_id },  function(campaign, error) {
    if (error) {
      callback(error);
    } else {
      callback(campaign);
    }
  });
} 