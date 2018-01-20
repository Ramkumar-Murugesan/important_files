var campaign_dao = require('../daos/Campaign_dao');

module.exports.create_campaign = function(campaign , callback){
    campaign_dao.create_campaign(campaign,function(campaign){
        callback(campaign);
    })
}

module.exports.update_campaign =function(campaign , callback){
    campaign_dao.update_campaign(campaign,function(campaign){
        callback(campaign);
    })
}

module.exports.search_campaign_for_update = function(campaign_id,callback){
    campaign_dao.search_campaign_for_update(campaign_id,function(campaign){
        callback(campaign);
    })
}

module.exports.delete_campaign = function(campaign_id,callback){
    campaign_dao.delete_campaign(campaign_id,function(campaign){
        callback(campaign);
    })
}

module.exports.get_all_campaign = function(callback){
    campaign_dao.get_all_campaign(function(campaign){
        callback(campaign);
    })
}