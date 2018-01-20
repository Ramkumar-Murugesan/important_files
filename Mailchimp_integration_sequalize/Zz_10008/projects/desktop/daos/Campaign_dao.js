var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/campaign.properties');
module.exports.create_campaign = function(campaign,callback) {
  var create_query = sqlQuery._properties.create_campaign;
  sequelize.query(create_query, {
    replacements: {
    	type : campaign.type,
        created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Campaign
  }).then(function(campaign) {
		callback(campaign);
	});
}
module.exports.update_campaign = function(campaign,callback) {
  var update_query = sqlQuery._properties.update_campaign;
  sequelize.query(update_query, {
    replacements: {
    	id : campaign.id,
    	type : campaign.type,
    updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.Campaign
  }).then(function(campaign) {
		callback(campaign);
	});
}
module.exports.search_campaign_for_update = function(campaign_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_campaign;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: campaign_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Campaign
  }).then(function(campaign) {
		callback(campaign[0]);
	});
}
module.exports.delete_campaign = function(campaign_id,callback) {
  var delete_query = sqlQuery._properties.delete_campaign;
  sequelize.query(delete_query, {
    replacements: {
    	id: campaign_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Campaign
  }).then(function() {
		callback();
	});
}
module.exports.get_all_campaign = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_campaign;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Campaign
  }).then(function(campaign) {
		callback(campaign);
	});
}