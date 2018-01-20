var service = require("../services/mailchimp_service")
module.exports.create_key = function(req, res) {
  var mailchimp = req.body;
  service.create_key(mailchimp,function (mailchimp){
    res.status(201);
    res.json(mailchimp);
  });
}
module.exports.update_key = function(req, res) {
  var mailchimp = req.body;
  service.update_key(mailchimp,function (mailchimp){
    res.status(201);
    res.json(mailchimp);

  });
}
module.exports.search_key_for_update = function(req, res) {
  var mailchimp_id = parseInt(req.params[0], 10);
  service.search_key_for_update(mailchimp_id,function (mailchimp){
    res.json(mailchimp);
  });
}
module.exports.delete_key = function(req, res) {
  var mailchimp_id = parseInt(req.params[0], 10);
  service.delete_key(mailchimp_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_key = function(req, res) {
  service.get_all_key(function (mailchimp){
    res.json(mailchimp);
  });
}