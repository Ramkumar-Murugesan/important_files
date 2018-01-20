var dao = require("../daos/mailchimp_dao")
module.exports.create_key = function(mailchimp,callback) {
  dao.create_key(mailchimp,function (mailchimp){
    callback(mailchimp);
  });
}
module.exports.update_key = function(mailchimp,callback) {
  dao.update_key(mailchimp,function (mailchimp){
    callback(mailchimp);
  });
}
module.exports.search_key_for_update = function(mailchimp_id,callback) {
  dao.search_key_for_update(mailchimp_id,function (mailchimp){
    callback(mailchimp)
  });
}
module.exports.delete_key = function(mailchimp_id,callback) {
  dao.delete_key(mailchimp_id,function (){
    callback();
  });
}
module.exports.get_all_key = function(callback) {
  dao.get_all_key(function (list_of_mailchimp){
    callback(list_of_mailchimp)
  });
}