var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/list.properties');
module.exports.create_list = function(list,callback) {
  var create_query = sqlQuery._properties.create_list;
  sequelize.query(create_query, {
    replacements: {
    	name : list.name,
        permission_remainder : list.permission_remainder,
        email_type_option :  list.email_type_option,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.List
  }).then(function(list) {
		callback(list);
	});
}
module.exports.update_list = function(list_id , listdata ,callback) {
  var update_query = sqlQuery._properties.update_list;
  sequelize.query(update_query, {
    replacements: {
    	id : list_id,
    	name : listdata.name,
    permission_remainder : listdata.permission_remainder,
    email_type_option : listdata.email_type_option,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.List
  }).then(function(list) {
		callback(list);
	});
}
module.exports.search_list_for_update = function(list_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_list;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: list_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.List
  }).then(function(list) {
		callback(list[0]);
	});
}
module.exports.delete_list = function(list_id,callback) {
  var delete_query = sqlQuery._properties.delete_list;
  sequelize.query(delete_query, {
    replacements: {
    	id: list_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.List
  }).then(function() {
		callback();
	});
}
module.exports.get_all_list = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_list;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.List
  }).then(function(list) {
		callback(list);
	});
}