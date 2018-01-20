var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/mailchimp_apikey.properties');
module.exports.create_key = function(Mailchimp,callback) {
  var create_query = sqlQuery._properties.create_key;
  sequelize.query(create_query, {
    replacements: {
    	userid : Mailchimp.userid,
    	apikey :Mailchimp.apikey,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Mailchimpkey
  }).then(function(mailchimp) {
		callback(mailchimp);
	});
}
module.exports.update_key = function(mailchimp,callback) {
  var update_query = sqlQuery._properties.update_key;
  sequelize.query(update_query, {
    replacements: {
    	id : mailchimp.id,
    	userid : mailchimp.userid,
    	apikey : mailchimp.apikey,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.Mailchimpkey
  }).then(function(mailchimp) {
		callback(mailchimp);
	});
}
module.exports.search_key_for_update = function(mailchimp_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_mailchimpkey;
  sequelize.query(search_for_update_query, {
    replacements: {
    	userid: mailchimp_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Mailchimpkey
  }).then(function(mailchimp) {
		callback(mailchimp[0]);
	});
}
module.exports.delete_key = function(mailchimp_id,callback) {
  var delete_query = sqlQuery._properties.delete_key;
  sequelize.query(delete_query, {
    replacements: {
    	id: mailchimp_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Mailchimpkey
  }).then(function() {
		callback();
	});
}
module.exports.get_all_key = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_key;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Mailchimpkey
  }).then(function(mailchimp) {
		callback(mailchimp);
	});
}