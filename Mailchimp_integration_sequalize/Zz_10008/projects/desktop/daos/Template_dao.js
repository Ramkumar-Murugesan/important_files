var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/template.properties');
module.exports.create_template = function(template,callback) {
  var create_query = sqlQuery._properties.create_template;
  sequelize.query(create_query, {
    replacements: {
    	name : template.name,
    	html : template.html,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Template
  }).then(function(template) {
		callback(template);
	});
}
module.exports.update_template = function(template_id,template,callback) {
  var update_query = sqlQuery._properties.update_template;
  sequelize.query(update_query, {
    replacements: {
    	id : template_id,
    	name : template.name,
    	html : template.html,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.Template
  }).then(function(template) {
		callback(template);
	});
}
module.exports.search_template_for_update = function(template_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_template;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: template_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Template
  }).then(function(template) {
		callback(template[0]);
	});
}
module.exports.delete_template = function(template_id,callback) {
  var delete_query = sqlQuery._properties.delete_template;
  sequelize.query(delete_query, {
    replacements: {
    	id: template_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Template
  }).then(function() {
		callback();
	});
}
module.exports.get_all_template = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_template;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Template
  }).then(function(template) {
		callback(template);
	});
}