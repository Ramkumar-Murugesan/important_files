var campaign_defaults_model = require("../models/Campaign_defaults");

module.exports.create_campaign_defaults = function(campaign_defaults ,callback){
    var campaign_defaults_value = new campaign_defaults_model(campaign_defaults);
    campaign_defaults_value.save(function(err,campaign_defaults){
        if(err){
            console.log("create list value err---",err)
            callback(err);
        }
        else{
            console.log("create list value success")
        callback(campaign_defaults);
    }
    })
} 