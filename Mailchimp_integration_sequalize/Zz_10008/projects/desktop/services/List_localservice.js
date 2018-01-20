var list_dao = require('../daos/List_dao');

module.exports.create_list = function(list , callback){
    list_dao.create_list(list,function(list){
        callback(list);
    })
}

module.exports.update_list =function(list_id ,data , callback){
    list_dao.update_list(list_id , data ,function(list){
        callback(list);
    })
}

module.exports.search_list_for_update = function(list_id,callback){
    list_dao.search_list_for_update(list_id,function(list){
        callback(list);
    })
}

module.exports.delete_list = function(list_id,callback){
    list_dao.delete_list(list_id,function(list){
        callback(list);
    })
}

module.exports.get_all_list = function(callback){
    list_dao.get_all_list(function(list){
        callback(list);
    })
}