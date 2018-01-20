var template_dao = require('../daos/Template_dao');

module.exports.create_template = function(template , callback){
    template_dao.create_template(template,function(template){
        callback(template);
    })
}

module.exports.update_template =function(template_id , template , callback){
    template_dao.update_template(template_id , template,function(template){
        callback(template);
    })
}

module.exports.search_template_for_update = function(template_id,callback){
    template_dao.search_template_for_update(template_id,function(template){
        callback(template);
    })
}

module.exports.delete_template = function(template_id,callback){
    template_dao.delete_template(template_id,function(template){
        callback(template);
    })
}

module.exports.get_all_template = function(callback){
    template_dao.get_all_template(function(template){
        callback(template);
    })
}